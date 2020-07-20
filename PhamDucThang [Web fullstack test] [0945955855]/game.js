
let enemy = 2;
let rocket = 5;
let temp = () => {
    let submit = document.getElementById("form")
    submit.addEventListener('submit', (e) => {
        e.preventDefault()
        let positionUser = submit.number.value
        switch (positionUser) {
            case "00":
                document.getElementById('o00').innerText='x'
                console.log(`you missed
                    1 enemy around
                    ${rocket -= 1} rocket left
                    ${enemy} enemy left`)
                break;
            case "01":
                document.getElementById('o10').innerText='x'
                console.log(`you missed
                    1 enemy around
                    ${rocket -= 1} rocket left
                    ${enemy} enemy left`)
                break;
            case "02":
                document.getElementById('o20').innerText='x'
                console.log(`you missed
                    0 enemy around
                    ${rocket -= 1} rocket left
                    ${enemy} enemy left`
                )
                break;
            case "03":
                document.getElementById('o30').innerText='x'
                console.log(`you missed
                    0 enemy around
                    ${rocket -= 1} rocket left
                    ${enemy} enemy left`)
                break;
            case "10":
                document.getElementById('o01').innerText='o'
                console.log(`you hit
                    0 enemy around
                    ${rocket -= 1} rocket left
                    ${enemy -= 1} enemy left`)
                break;
            case "11":
                document.getElementById('o11').innerText='x'
                console.log(`you missed
                    2 enemy around
                    ${rocket -= 1} rocket left
                    ${enemy} enemy left`)
                break;
            case "12":
                document.getElementById('o21').innerText='x'
                console.log(`you missed
                     enemy around
                    ${rocket -= 1} rocket left
                    ${enemy} enemy left`)
                break;
            case "13":
                document.getElementById('o31').innerText='x'
                console.log(`you missed
                    0 enemy around
                    ${rocket -= 1} rocket left
                    ${enemy} enemy left`)
                break;
            case "20":
                document.getElementById('o02').innerText='x'
                console.log(`you missed
                    1 enemy around
                    ${rocket -= 1} rocket left
                    ${enemy} enemy left`)
                break;
            case "21":
                document.getElementById('o12').innerText='x'
                console.log(`you missed
                    2 enemy around
                    ${rocket -= 1} rocket left
                    ${enemy} enemy left`)
                break;
            case "22":
                document.getElementById('o22').innerText='x'
                console.log(`you missed
                    1 enemy around
                    ${rocket -= 1} rocket left
                    ${enemy} enemy left`)
                break;
            case "23":
                document.getElementById('o32').innerText='x'
                console.log(`you missed
                    1 enemy around
                    ${rocket -= 1} rocket left
                    ${enemy} enemy left`)
                break;
            case "30":
                document.getElementById('o03').innerText='x'
                console.log(`you missed
                    0 enemy around
                    ${rocket -= 1} rocket left
                    ${enemy} enemy left`)
                break;
            case "31":
                document.getElementById('o13').innerText='x'
                console.log(`you missed
                    1 enemy around
                    ${rocket -= 1} rocket left
                    ${enemy} enemy left`)
                break;
            case "32":
                document.getElementById('o32').innerText='o'
                console.log(`you hit
                    0 enemy around
                    ${rocket -= 1} rocket left
                    ${enemy -= 1} enemy left`)
                break;
            case "33":
                document.getElementById('o33').innerText='x'
                console.log(`you missed
                        1 enemy around
                        ${rocket -= 1} rocket left
                        ${enemy} enemy left`)
                break;
        }

        if (rocket == 0) {
            if(enemy ==0){
                console.log("you won")
                console.log("Please reset page to restart game ")
                return;
            }
            console.log("You lose")
            console.log("Please reset page to restart game ")
        }
        if (enemy == 0) {
            console.log("you won")
            console.log("Please reset page to restart game ")
        }
        submit.number.value=""
    })
}
temp()





