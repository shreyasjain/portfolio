import React, { useEffect } from 'react'
import "../Styles/Portfolio.scss"
import "../Styles/Home.scss"
import NavigationBar from '../Components/NavigationBar'
import dp from "../Media/dp.jpg"
import { Container } from 'react-bootstrap'
import axios from 'axios'



function Home() {

    useEffect(()=>{
        axios.get("https://5ffeb221a4a0dd001701ae6f.mockapi.io/home")
        .then(res=>console.log(res))
        .catch(err=>console.log(err.message))
    },[])

    useEffect(() => {
        var elements = document.getElementsByClassName('typewrite');
        for (var i = 0; i < elements.length; i++) {
            var toRotate = elements[i].getAttribute('data-type');
            var period = elements[i].getAttribute('data-period');
            if (toRotate) {
                TxtType(elements[i], JSON.parse(toRotate), period);
            }
        }
    }, [])

    const TxtType = (el, toRotate, period) => {
        debugger;
        var obj = {};
        obj.toRotate = toRotate;
        obj.el = el;
        obj.loopNum = 0;
        obj.period = parseInt(period, 10) || 2000;
        obj.txt = '';
        tick(obj);
        obj.isDeleting = false;

    };

    const tick = (obj) => {
        debugger;
        var i = obj.loopNum % obj.toRotate.length;
        var fullTxt = obj.toRotate[i];

        if (obj.isDeleting) {
            obj.txt = fullTxt.substring(0, obj.txt.length - 1);
        } else {
            obj.txt = fullTxt.substring(0, obj.txt.length + 1);
        }

        obj.el.innerHTML = '<span class="wrap">' + obj.txt + '</span>';


        var delta = 200 - Math.random() * 100;

        if (obj.isDeleting) { delta /= 2; }

        if (!obj.isDeleting && obj.txt === fullTxt) {
            delta = obj.period;
            obj.isDeleting = obj;
        } else if (obj.isDeleting && obj.txt === '') {
            obj.isDeleting = false;
            obj.loopNum++;
            delta = 500;
        }

        setTimeout(function () {
            tick(obj);
        }, delta);
    }

    // const downloadFile = () => {
    //     axios.get("https://drive.google.com/uc?export=view&id=1GVbshfP1qUS67t_tePNqz-9VKPc3kwQ_")
    //         .then(res => console.log(res))
    //         .catch(err => console.log(err))
    // }

    const handleResume = ()=>{
        window.open("https://drive.google.com/file/d/1mD7jbhml_oP5EMO-5MnmXYSeojUPtIHD/view?usp=sharing");
    }

    return (
        <div id="home">
            <NavigationBar />

            <div className="custom-container home-container">
                <div className="home-texts">

                {/* <a href="../Media/html.png" download >Download</a> */}

                    <div className="home-dp">
                        {/* <img height="100px" width="100px" src="https://drive.google.com/uc?export=view&id=1GVbshfP1qUS67t_tePNqz-9VKPc3kwQ_" /> */}
                    <img height="100px" width="100px" src={dp}/>
                    </div>
                    <div className="home-texts-col-1">
                        <div className="home-main-heading">
                            <h1>Hi, I'm Shreyas Jain</h1>
                        </div>
                        <div className="home-text-effect">
                            <h1>I am a 
                                <a href="" class="typewrite" data-period="2000" data-type='[" developer"," problem-solver"," geek"," blogger"," believer"]'>
                                    
                                    <span class="wrap"></span>
                                </a>
                            </h1>
                        </div>
                        <div className="resume-button">
                            <button onClick={handleResume}>Get Resume</button>
                        </div>
                    </div>
                </div>
            </div>
            <style>
                @import url('https://fonts.googleapis.com/css2?family=Anton&display=swap');
</style>
        </div>
    )
}

export default Home
