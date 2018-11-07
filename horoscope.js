var message= ["","the mad scientist and humanitarian of the horoscope wheel, futuristic Aquarius energy helps us innovate and unite for social justice.",
    "the dreamer and healer of the horoscope family, Pisces energy awakens compassion, imagination and artistry, uniting us as one.",
    "the pioneer and trailblazer of the horoscope wheel, Aries energy helps us initiate, fight for our beliefs and fearlessly put ourselves out there.",
    "the persistent provider of the horoscope family, Taurus energy helps us seek security, enjoy earthly pleasures and get the job done.",
    "the most versatile and vibrant horoscope sign, Gemini energy helps us communicate, collaborate and fly our freak flags at full mast.",
    "the natural nurturer of the horoscope wheel, Cancer energy helps us connect with our feelings, plant deep roots and feather our family nests.",
    "the drama queen and regal ruler of the horoscope clan, Leo energy helps us shine, express ourselves boldly and wear our hearts on our sleeves.",
    "the masterful helper of the horoscope wheel, Virgo energy teaches us to serve, do impeccable work and prioritize wellbeing—of ourselves, our loved ones and the planet.",
    "the balanced beautifier of the horoscope family, Libra energy inspires us to seek peace, harmony and cooperation—and to do it with style and grace.",
    "the most intense and focused of the horoscope signs, Scorpio energy helps us dive deep, merge our superpowers and form bonds that are built to last.",
    "the worldly adventurer of the horoscope wheel, Sagittarius energy inspires us to dream big, chase the impossible and take fearless risks.",
    "the measured master planner of the horoscope family, Capricorn energy teaches us the power of structure and long-term goals.",""]
var signs=["","Aquarius: The Water Bearer","Pisces: The Fish","Aries: The Ram","Taurus: The Bull","Gemini: The Twins","Cancer: The Crab","Leo: The Lion","Virgo: The Virgin","Libra: The Scales","Scorpio: The Scorpion","Sagittarius: The Archer","Capricorn: The Goat","undefined: please enter valid dates"]
var sun=["", "Aquarius","Pisces","Aries","Taurus","Gemini","Cancer","Leo","Virgo","Libra","Scorpio","Sagittarius","Capricorn" ];
var years=["Rat","Ox","Tiger","Hare","Dragon","Snake","Horse","Ram","Monkey","Rooster","Dog","Pig"]
var images=["","images/aquarius.png","images/pisces.png","images/aries.png","images/taurus.png","images/gemini.png","images/cancer.png","images/leo.png","images/virgo.png","images/libra.png","images/scorpio.png","images/sagittarius.png","images/capricorn.png", ""];

function horoscope() {
    var name = document.getElementById("name").value;
    var birthday = document.getElementById("birthDay").value;
    var birthmonth = document.getElementById("birthMonth").value;
    var year = document.getElementById("year").value;
    var sign = determineHoroscope(birthday, birthmonth);
    var chinese=findanimal(year);

    document.getElementById("sign").innerHTML = "Hi "+ name +", your sign is "+signs[sign];
    if(sign<=12){
        document.getElementById("image").src=images[sign];
        document.getElementById("message").innerHTML= "As a "+sun[sign]+" you are "+message[sign];
        document.getElementById("chinese").innerHTML = "Also according to Chinese Zodiac you were born in the year of the "+ years[chinese];
    }
}

function determineHoroscope(birthday, birthmonth) {
    if (birthday >= 20 && birthmonth == 1 && birthday <= 31|| birthday <= 18 && birthmonth == 2) {
        return 1; //Aquarius
    } else if (birthday >= 19 && birthmonth == 2 && birthday <= 29|| birthday <= 20 && birthmonth == 3) {
        return 2; //Pisces
    } else if (birthday >= 21 && birthmonth == 3 && birthday <= 31 || birthday <= 19 && birthmonth == 4) {
        return 3; //Aries
    } else if (birthday >= 20 && birthmonth == 4 && birthday <= 30 || birthday <= 20 && birthmonth == 5) {
        return 4; //Taurus
    } else if (birthday >= 21 && birthmonth == 5 && birthday <= 31 || birthday <= 20 && birthmonth == 6) {
        return 5; //Gemini
    } else if (birthday >= 21 && birthmonth == 6 && birthday <= 30 || birthday <= 22 && birthmonth == 7) {
        return 6; //Cancer
    } else if (birthday >= 23 && birthmonth == 7 && birthday <= 31 || birthday <= 22 && birthmonth == 8) {
        return 7; //Leo
    } else if (birthday >= 23 && birthmonth == 8 && birthday <= 31 || birthday <= 22 && birthmonth == 9) {
        return 8; //Virgo
    } else if (birthday >= 23 && birthmonth == 9 && birthday <= 31 || birthday <= 22 && birthmonth == 10) {
        return 9; //Libra
    } else if (birthday >= 23 && birthmonth == 10 && birthday <= 31 || birthday <= 21 && birthmonth == 11) {
        return 10; //Scorpio
    } else if (birthday >= 22 && birthmonth == 11 && birthday <= 30 || birthday <= 21 && birthmonth == 12) {
        return 11; //Sagittarius
    } else if (birthday >= 22 && birthmonth == 12 && birthday <= 31 || birthday <= 19 && birthmonth == 1) {
        return 12; //Capricorn
    }else{
        return 13;
    }
}

function findanimal(year){
    if (year==1900|| (year-1900)%12==0) {
        return 0; //rat
    }if (year==1901|| (year-1901)%12==0) {
        return 1; //ox
    }if (year==1902|| (year-1902)%12==0) {
        return 2; //tiger
    }if (year==1903|| (year-1903)%12==0) {
        return 3; //hare
    }if (year==1904|| (year-1904)%12==0) {
        return 4; //dragon
    }if (year==1905|| (year-1905)%12==0) {
        return 5; //snake
    }if (year==1906|| (year-1906)%12==0) {
        return 6; //horse
    }if (year==1907|| (year-1907)%12==0) {
        return 7; //ram
    }if (year==1908|| (year-1908)%12==0) {
        return 8; //monkey
    }if (year==1909|| (year-1909)%12==0) {
        return 9; //rooster
    }if (year==1910|| (year-1910)%12==0) {
        return 10; //dog
    }if (year==1911|| (year-1911)%12==0) {
        return 11; //pig
    }
}

