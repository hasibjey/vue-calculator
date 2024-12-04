<template>
    <section class="setting-box-2" @click="closeModel">
        <div class="setting" @click.stop>
            <h1 class="title">Setting</h1>
            <ul class="form-box">
                <li class="form-group">
                    <label>Display font size</label>
                    <input type="text" class="form-control" v-model="displayFont">
                </li>
                <li class="form-group">
                    <label>Font size</label>
                    <input type="text" class="form-control" v-model="fontSize">
                </li>
                <li class="form-group">
                    <label>Theme color</label>
                    <input type="color" class="form-control" v-model="bg">
                </li>
                <li class="form-group">
                    <label>Button color</label>
                    <input type="color" class="form-control" v-model="btn">
                </li>
                <li class="form-group">
                    <label>Text color</label>
                    <input type="color" class="form-control" v-model="textColor">
                </li>
            </ul>
            <div class="form-btn-group">
                <button class="setting-btn btn-danger" @click="clearSetting">Clear</button>
                <button class="setting-btn" @click="handleSave">Save</button>
            </div>
        </div>
    </section>

    <FooterComponent/>
</template>

<script>
import FooterComponent from '@/components/FooterComponent.vue';

export default {
    name: 'SettingView',
    components: {FooterComponent},
    data() {
        return {
            displayFont: '24',
            fontSize: '16',
            bg: '#464a4b',
            btn: '#f9a509',
            textColor: '#e6e5e5'
        }
    },
    methods: {
        getSetting() {
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
        },
        handleSave() {
            localStorage.setItem('displayFont', this.displayFont);
            localStorage.setItem('fontSize', this.fontSize);
            localStorage.setItem('bg', this.bg);
            localStorage.setItem('btn', this.btn);
            localStorage.setItem('textColor', this.textColor);
            alert("Setting update successfully..");
        },
        clearSetting() {
            localStorage.removeItem('displayFont');
            localStorage.removeItem('fontSize');
            localStorage.removeItem('bg');
            localStorage.removeItem('btn');
            localStorage.removeItem('textColor');
            this.displayFont = '24'
            this.fontSize = '16'
            this.bg = '#464a4b'
            this.btn = '#f9a509'
            this.textColor = '#e6e5e5'
            alert("Reset all setting");
        }
    },
    mounted() {
        this.getSetting()
    },
}
</script>