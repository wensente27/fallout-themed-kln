const about = document.querySelector("#about")
const aboutContent = document.querySelector("#about-content")

about.addEventListener('click', () => {
    const aboutBox = new WinBox({
        title: 'about_me.txt',
        background: '#061E10',
        width: '400px',
        height: '400px',
        top: 50,
        right: 50,
        bottom: 50,
        left: 50,
        mount: aboutContent
    })
})