        // red, yellow, green, blue#f5f5f5
        var colors = ['#ffc1b6', '#ffeda3', '#ccffbd', '#caf7e3', '#e9d4c3'];
        var themes = ['#a58faa', '#de8971', '#ff9f40', '#709fb0', '#1d1c1c'];
        var audios = [
            'resources/audio/12995__tesabob2001__piano-keys-c3-c6/203458__tesabob2001__a3.mp3',
            'resources/audio/12995__tesabob2001__piano-keys-c3-c6/203459__tesabob2001__a-5.mp3',
            'resources/audio/12995__tesabob2001__piano-keys-c3-c6/203460__tesabob2001__a-4.mp3',
            'resources/audio/12995__tesabob2001__piano-keys-c3-c6/203462__tesabob2001__b4.mp3',
            'resources/audio/12995__tesabob2001__piano-keys-c3-c6/203463__tesabob2001__b3.mp3',
            'resources/audio/12995__tesabob2001__piano-keys-c3-c6/203464__tesabob2001__a5.mp3',
            'resources/audio/12995__tesabob2001__piano-keys-c3-c6/203465__tesabob2001__a4.mp3',
            'resources/audio/12995__tesabob2001__piano-keys-c3-c6/203466__tesabob2001__c-3.mp3',
            'resources/audio/12995__tesabob2001__piano-keys-c3-c6/203467__tesabob2001__b5.mp3',
            'resources/audio/12995__tesabob2001__piano-keys-c3-c6/203468__tesabob2001__f3.mp3',
            'resources/audio/12995__tesabob2001__piano-keys-c3-c6/203470__tesabob2001__e3.mp3',
            'resources/audio/12995__tesabob2001__piano-keys-c3-c6/203471__tesabob2001__e4.mp3',
            'resources/audio/12995__tesabob2001__piano-keys-c3-c6/203472__tesabob2001__d4.mp3',
            'resources/audio/12995__tesabob2001__piano-keys-c3-c6/203473__tesabob2001__d5.mp3',
            'resources/audio/12995__tesabob2001__piano-keys-c3-c6/203476__tesabob2001__e5.mp3',
            'resources/audio/12995__tesabob2001__piano-keys-c3-c6/203478__tesabob2001__c4-middle-c.mp3',
            'resources/audio/12995__tesabob2001__piano-keys-c3-c6/203479__tesabob2001__c3.mp3',
            'resources/audio/12995__tesabob2001__piano-keys-c3-c6/203480__tesabob2001__c-5.mp3',
            'resources/audio/12995__tesabob2001__piano-keys-c3-c6/203481__tesabob2001__c-4.mp3',
            'resources/audio/12995__tesabob2001__piano-keys-c3-c6/203482__tesabob2001__d-4.mp3',
            'resources/audio/12995__tesabob2001__piano-keys-c3-c6/203483__tesabob2001__d-3.mp3',
            'resources/audio/12995__tesabob2001__piano-keys-c3-c6/203484__tesabob2001__c6.mp3',
            'resources/audio/12995__tesabob2001__piano-keys-c3-c6/203485__tesabob2001__c5.mp3',
            'resources/audio/12995__tesabob2001__piano-keys-c3-c6/203486__tesabob2001__d3.mp3',
            'resources/audio/12995__tesabob2001__piano-keys-c3-c6/203487__tesabob2001__d-5.mp3',
            'resources/audio/12995__tesabob2001__piano-keys-c3-c6/203488__tesabob2001__g-3.mp3',
            'resources/audio/12995__tesabob2001__piano-keys-c3-c6/203489__tesabob2001__f5.mp3',
            'resources/audio/12995__tesabob2001__piano-keys-c3-c6/203490__tesabob2001__g-5.mp3',
            'resources/audio/12995__tesabob2001__piano-keys-c3-c6/203491__tesabob2001__g-4.mp3',
            'resources/audio/12995__tesabob2001__piano-keys-c3-c6/203492__tesabob2001__g4.mp3',
            'resources/audio/12995__tesabob2001__piano-keys-c3-c6/203493__tesabob2001__g3.mp3',
            'resources/audio/12995__tesabob2001__piano-keys-c3-c6/203495__tesabob2001__g5.mp3',
            'resources/audio/12995__tesabob2001__piano-keys-c3-c6/203499__tesabob2001__f-5.mp3',
            'resources/audio/12995__tesabob2001__piano-keys-c3-c6/203500__tesabob2001__f-4.mp3',
            'resources/audio/12995__tesabob2001__piano-keys-c3-c6/203501__tesabob2001__f-3.mp3',
            'resources/audio/12995__tesabob2001__piano-keys-c3-c6/203502__tesabob2001__a-3.mp3',
        ];

        function changetheme(){
            var i = Math.floor(Math.random() * themes.length);
            document.getElementById('pianowhitekeys').style.background = themes[i];
            document.getElementById('themechanger').style.borderColor = themes[i];
            console.log(themes[i]);
        }

        function changecolor(){
            var i = Math.floor(Math.random() * colors.length);
            elements = document.getElementsByClassName("whitekey");
            for(var j = 0; j < 21; j++){
                elements[j].style.backgroundColor= colors[i];
            }
            document.getElementById('colorchanger').style.borderColor = colors[i];
            console.log(colors[i]);
        }   

        function playkey(c){
            var audio = new Audio(audios[c]);
            audio.play();
        }
