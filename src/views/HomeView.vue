<template>
  <section class="wrapper">
    <div class="calculator" :style="{ background: bg, color: textColor, fontSize: `${fontSize}px` }">
      <div class="display" :style="{fontSize: `${displayFont}px` }">{{ display || "0" }}</div>
      <div class="icon">
        <ul>
          <li @click="historyToggle">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
              stroke="currentColor" class="icon-size">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
          </li>
          <li @click="settingToggle">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
              stroke="currentColor" class="icon-size">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 0 1 1.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.559.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.894.149c-.424.07-.764.383-.929.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 0 1-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.398.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 0 1-.12-1.45l.527-.737c.25-.35.272-.806.108-1.204-.165-.397-.506-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.108-1.204l-.526-.738a1.125 1.125 0 0 1 .12-1.45l.773-.773a1.125 1.125 0 0 1 1.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894Z" />
              <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
            </svg>
          </li>
        </ul>
      </div>
      <div @click="del">AC</div>
      <div class="" @click="clear">C</div>
      <div @click="reset">R</div>
      <div @click="append" class="bg-primary" :style="{ background: btn}">/</div>

      <div @click="append">7</div>
      <div @click="append">8</div>
      <div @click="append">9</div>
      <div @click="append" class="bg-primary" :style="{ background: btn}">*</div>

      <div @click="append">4</div>
      <div @click="append">5</div>
      <div @click="append">6</div>
      <div @click="append" class="bg-primary" :style="{ background: btn}">-</div>

      <div @click="append">1</div>
      <div @click="append">2</div>
      <div @click="append">3</div>
      <div @click="append" class="bg-primary" :style="{ background: btn}">+</div>

      <div @click="append" class="cols-span-2 rounded-b-l">0</div>
      <div @click="append">.</div>
      <div @click="equal" class="bg-primary rounded-b-r" :style="{ background: btn}">=</div>
    </div>
    <HistoryViewModal v-if="isHistoryActive" :history="history" />
  </section>

  <SettingViewModal v-if="isSettingActive" :displayFontProps="displayFont" :fontSizeProps="fontSize" :bgProps="bg"
    :btnProps="btn" :textColorProps="textColor" @close="settingToggle" @changeBg="updateBackgroundColor"
    @changeBtn="updateButtonColor" @changeTextColor="updateTextColor" @changeFontSize="updateFontSize"
    @changeDisplayFont="updateDisplayFont" />

    <FooterComponent/>
</template>

<script>
import FooterComponent from '@/components/FooterComponent.vue';
import HistoryViewModal from './HistoryViewModal.vue';
import SettingViewModal from './SettingViewModal.vue';


export default {
  name: 'HomeView',
  components: { HistoryViewModal, SettingViewModal, FooterComponent },
  data() {
    return {
      operators: ['+', '-', '*', '/'],
      display: '',
      number: null,
      result: true,
      history: [],
      isHistoryActive: false,
      isSettingActive: false,

      displayFont: '24',
      fontSize: '16',
      bg: '#464a4b',
      btn: '#f9a509',
      textColor: '#e6e5e5'
    }
  },
  methods: {
    clear () {
      this.display = ""
    },
    reset () {
      this.display = ""
      this.history = []
      localStorage.removeItem('history');
      alert("Reset all histories");
    },
    del () {
      if (this.display.length > 0) {
        this.display = this.display.slice(0, -1);
      }

      if(this.result == true)
        this.display = ''
    },
    append(e) {
      
      if (e.target.innerHTML === '.' && this.display.includes('.') && this.display.length > 0)
        return
      else if (e.target.innerHTML === '.' && this.display.length <= 0)
        return
      else if (this.operators.includes(e.target.innerHTML) === true && this.display.length <= 0)
        return

      if(this.result === true) {
        this.display = ''
        this.result = false;
        this.display = this.display + e.target.innerHTML
      }
      else
        this.display = this.display + e.target.innerHTML
    },
    equal () {
      if (this.operators.includes(this.display.toString().slice(-1)) === true)
        return

      this.history.push(this.display + '=' + eval(this.display))
      localStorage.setItem('history', JSON.stringify(this.history));
      this.display = eval(this.display);
      this.result = true
    },
    historyToggle () {
      this.isHistoryActive = !this.isHistoryActive
    },
    settingToggle () {
      this.isSettingActive = !this.isSettingActive
    },
    updateBackgroundColor(newColor) {
      this.bg = newColor
    },
    updateButtonColor(newColor) {
      this.btn = newColor
    },
    updateTextColor(newColor) {
      this.textColor = newColor
    },
    updateFontSize(newSize) {
      this.fontSize = newSize
    },
    updateDisplayFont(newSize) {
      this.displayFont = newSize
    },
  },
  mounted () {
    if (localStorage.getItem('history'))
      this.history = JSON.parse(localStorage.getItem('history'));

    if (localStorage.getItem('displayFont'))
      this.displayFont = localStorage.getItem('displayFont');

    if (localStorage.getItem('fontSize'))
      this.fontSize = localStorage.getItem('fontSize');

    if (localStorage.getItem('bg'))
      this.bg = localStorage.getItem('bg');

    if (localStorage.getItem('btn'))
      this.btn = localStorage.getItem('btn');

    if (localStorage.getItem('textColor'))
      this.textColor = localStorage.getItem('textColor');

    localStorage.setItem('displayFont', this.displayFont);
    localStorage.setItem('fontSize', this.fontSize);
    localStorage.setItem('bg', this.bg);
    localStorage.setItem('btn', this.btn);
    localStorage.setItem('textColor', this.textColor);
    
  },
}
</script>
