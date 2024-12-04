<template>
    <section class="setting-box" @click="closeModel">
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
                <button class="setting-btn" @click="handleSave">Save</button>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    props: ['displayFontProps', 'fontSizeProps', 'bgProps', 'btnProps', 'textColorProps'],
    name: 'SettingView',
    data() {
        return {
            displayFont: this.displayFontProps,
            fontSize: this.fontSizeProps,
            bg: this.bgProps,
            btn: this.btnProps,
            textColor: this.textColorProps
        }
    },
    methods: {
        closeModel() {
            this.$emit('close')
        },
        changeBackgroundColor() {
            this.$emit('changeBg', this.bg);
        },
        changeButtonColor() {
            this.$emit('changeBtn', this.btn);
        },
        changeTextColor() {
            this.$emit('changeTextColor', this.textColor);
        },
        changeFontSize() {
            this.$emit('changeFontSize', this.fontSize);
        },
        changeDisplayFont() {
            this.$emit('changeDisplayFont', this.displayFont);
        },
        handleSave() {
            this.closeModel();
            this.changeBackgroundColor();
            this.changeButtonColor()
            this.changeTextColor()
            this.changeFontSize()
            this.changeDisplayFont()
        }
    },
}
</script>