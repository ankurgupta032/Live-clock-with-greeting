const time = document.getElementById('time');
        const greetings = document.getElementById('greetings');
        const name = document.getElementById('name');
        const day = document.getElementById('date');

        function show(){
            let todaytime = new Date();
            let hour = todaytime.getHours();
            let min = todaytime.getMinutes();
            let sec = todaytime.getSeconds();
            let date = todaytime.toDateString();

            let ampm = hour >=12 ? 'PM' : 'AM';

            if(hour == 24){
                hour = 0;
            }
            else{
                hour = hour%12 || 12 ;
            }

            time.innerHTML = `${addZero(hour)}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)} ${ampm}`;
            day.innerHTML = `${date}`;
            setTimeout(show,1000);      //to show every second  a new data fetched...
        }
        function addZero(n){
            return((parseInt(n,10)<10 ? '0' : '')+n);
        }
        function greet(){
            let today = new Date();
            let hour = today.getHours();
            if(hour<12){
                greetings.innerHTML = 'Good Morning';
                document.body.style.background = "url('morning.png') no-repeat center center/cover";
                document.body.style.color = 'white';
            }
            else if(hour<18){
                greetings.innerHTML = 'Good Afternoon';
                document.body.style.background = "url('afternoon.png') no-repeat center center/cover";
                document.body.style.color = 'white';
            }
            else{
                greetings.innerHTML = 'Good Evening';
                document.body.style.background = "url('evening.png') no-repeat center center/cover";
                document.body.style.color = 'white';
            }
        }

        
        name.addEventListener('keypress',setname);

        function getName(){
            if(localStorage.getItem('myname') == null){
                name.innerHTML = 'Enter Name';
            }
            else{
                name.innerHTML = localStorage.getItem('myname');
            }
        }
        function setname(e){
            // console.log(e);
            if(e.type == "keypress"){
                if(e.keyCode == 13){
                    localStorage.setItem('myname',e.target.innerHTML);
                    name.blur();
                }
            }
            else{
                localStorage.setItem('myname',e.target.innerHTML);
            }
        }

        show();
        greet();
        getName();