// Micromodalをコントロールするためのjs

MicroModal.init({
    /** trueにすると、モーダルが開いている間はスクロール操作を効かなくする。falseにするとモーダルが開いていても画面がスクロールする。*/
    disableScroll: true,

    /** モーダルが開くために適用されるクラス */
    openClass: 'is-open',
    
    awaitOpenAnimation: true,
    awaitCloseAnimation: true
});