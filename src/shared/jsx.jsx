const arr = [
    {
    cardId:1 (Pk),
    date : 20211203,
        { textId: 1,text: "10시 기상",checked: true,daily: true},
        { textId: 2, text: "11시 운동", checked: false,daily: false},
    },
    {
    cardId: 2 , 
        {
        textId: 1,
        text: "10시 기상",
        checked: true,
        daily: true
        },
        {
        textId: 2,
        text: "11시 운동",
        checked: false,
        daily: false
        },
    date : 20211214
    },
    {
    cardId: 3 (오늘카드 → 00시에 DB에 자동생성), 
        {
        textId: 1,
        text: "10시 기상",
        checked: true,
        daily: true
        }
    date : 20211215(오늘날짜)
    }
    ]