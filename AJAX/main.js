// Ex1
const fetch = function (ISBN) {
        $.ajax({
            method: "GET",
            url: `https://www.googleapis.com/books/v1/volumes?q=${ISBN}`,
            success: function (response) {
                const title = response.items[0].volumeInfo.title
                const author = response.items[0].volumeInfo.authors
                console.log(title + " by " + author)
            },
        })
    }
    fetch(1440633908)
    //end Ex1
    // Ex2
    const fetchB = function (qType, qValue) {
        $.ajax({
            method: "GET",
            url: `https://www.googleapis.com/books/v1/volumes?q=${qType}:${qValue}`,
            success: function (response) {
                const title = response.items[0].volumeInfo.title
                const author = response.items[0].volumeInfo.authors
                console.log(title + " by " + author)
            },
        })
    }
    fetchB("isbn", 9789814561778)
    fetchB("title", "How to Win Friends and Influence People")
    // end Ex2
    //Ex3
    const fetchC = function (qType, qValue) {
        let counter = 0
        $.ajax({
            method: "GET",
            url: `https://www.googleapis.com/books/v1/volumes?q=${qType}:${qValue}`,
            success: function (response) {
                for (let item of response.items) {
                    console.log("Book No:" + counter++)
                    console.log(item.volumeInfo.title)
                    console.log(item.volumeInfo.authors)
                    console.log(item.volumeInfo.industryIdentifiers)
                }
            },
        })
    }
    
    fetchC("title", "How to Win Friends and Influence People")
// end Ex3