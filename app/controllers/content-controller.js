
app.controller("ContentController", function($scope) {

    $scope.maincontent = [
        {
            image: "static/images/Set1_3.jpg"
        },
        {
            image: "static/images/Set2_2.jpg"
        },
        {
            image: "static/images/Set4_1.jpg"
        },
    ];

    $scope.aboutme = {
        text: 
`Меня зовут Женя и я программист. Но где-то полгода назад я поняла на все 100%, что быть только программистом я больше не могу. Нужно где-то вновь искать себя, чтобы получать кроме заработной платы ещё и эстетическое удовольствие. Чтоб видеть от своих трудов отдачу в других людях. Именно так я пришла к тому, что начала заниматься портретной фотосъемкой, в основном детской и женской.

До этого я уже поменяла пару камер, снимала в основном природу, города, где бывала, ну и домашние посиделки. Фотоаппарат всегда был частью моей жизни с детства, возможно сказалась наследственность, оба дедушки увлекались фотографией. Но я никогда раньше не думала, что мне захочется фотографировать не только для себя, но и для других. Сейчас же я получаю от этого кайф!`,
        avatar: "static/images/avatar.png"
    }

    $scope.contacts = {
        vkontakte: {
            link: 'https://vk.com/evponomareva_photo',
            icon: 'static/images/vk-icon.png'
        },
        email: {
            link: 'evponomareva_photo@gmail.com',
            icon: 'static/images/gmail-icon.png'
        },
        instagram: {
            link: 'https://www.instagram.com/evponomareva_photo',
            icon: 'static/images/instagram-icon.png'
        },
        phone: "+7 (920) 002-52-58"
    }
});