export default [
    {
        url: "/api/schedule",
        method: "get",
        response: () => {
            return {
                code: 0,
                message: "ok",
                data:{
                    "avatorUrl": "https://fakeimg.pl/300/",
                    "name": "陳",
                    "gender": "male",
                    "phoneNumber": "0912345678",
                    "mail": "abc@gmail.com"
                  }
            }
        }
    },
    {
        url: "/employer/caretakers",
        method: "get",
        response: () => {
            return {
                code: 0,
                message: "ok",
                data:{
                    "data": [
                      {
                        "id": 1,
                        "name": "看先生",
                        "age": 35,
                        "height": 173,
                        "weight": 70,
                        "seniority": {
                          "id": 4,
                          "name": "10年以上"
                        },
                        "experience": [
                          {
                            "id": 2,
                            "name": "腦中風(24小時)"
                          },
                          {
                            "id": 2,
                            "name": "失智症(80小時)"
                          },
                        ],
                        "star": 3.6,
                        "comments": 13
                      },
                      {
                        "id": 2,
                        "name": "張小姐",
                        "age": 58,
                        "height": 163,
                        "weight": 60,
                        "seniority": {
                          "id": 2,
                          "name": "1~3年"
                        },
                        "experience": [
                          {
                            "id": 2,
                            "name": "腦中風(24小時)"
                          },
                          {
                            "id": 2,
                            "name": "失智症(80小時)"
                          },
                        ],
                        "star": 4.0,
                        "comments": 13
                      },
                    ],
                    "total": 2
                  }
            }
        }
    },
    ,
    {
        url: "/api/favorite",
        method: "get",
        response: () => {
            return {
                code: 0,
                message: "ok",
                data:{
                    "data": [
                      {
                        "id": 2,
                        "name": "看先生",
                        "age": 35,
                        "height": 173,
                        "weight": 70,
                        "seniority": {
                          "id": 4,
                          "name": "10年以上"
                        },
                        "experience": [
                          {
                            "id": 2,
                            "name": "腦中風(24小時)"
                          }
                        ],
                        "star": 3.6,
                        "comments": 13
                      }
                    ],
                    "total": 20
                  }
            }
        }
    },

]