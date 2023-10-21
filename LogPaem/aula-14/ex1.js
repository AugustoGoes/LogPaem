// 1. crie uma função que retorna todos os registros em array no formato descrito abaixo:
// ["Jemmie","jsearchwell0@behance.net","Female","Lexus",2007,"Argentina"] ou seja [Nome, email, genero, carro, ano_carro, origem]

function pegaDados() {
    return [{"nome":"Jemmie","email":"jsearchwell0@behance.net","genero":"Female","carro":"Lexus","ano_carro":2007,"origem":"Argentina"},
    {"nome":"Konstantin","email":"khovert1@accuweather.com","genero":"Male","carro":"Hyundai","ano_carro":2004,"origem":"Argentina"},
    {"nome":"Jehanna","email":"jpiscotti2@rambler.ru","genero":"Female","carro":"Dodge","ano_carro":2005,"origem":"Brazil"},
    {"nome":"Dawna","email":"dfalkous3@epa.gov","genero":"Female","carro":"Chevrolet","ano_carro":1998,"origem":"Argentina"},
    {"nome":"Eddie","email":"edelf4@last.fm","genero":"Male","carro":"Porsche","ano_carro":2008,"origem":"Brazil"} ,
    {"nome":"Tammi","email":"tyousef5@oakley.com","genero":"Female","carro":"Dodge","ano_carro":2007,"origem":"Argentina"},
    {"nome":"Sigfried","email":"smatterson6@liveinternet.ru","genero":"Male","carro":"Lincoln","ano_carro":2000,"origem":"Brazil"},
    {"nome":"Karly","email":"ktwells7@cocolog-nifty.com","genero":"Female","carro":"Cadillac","ano_carro":2009,"origem":"Brazil"},
    {"nome":"Celestyn","email":"codonoghue8@sourceforge.net","genero":"Genderqueer","carro":"Kia","ano_carro":2009,"origem":"Brazil"},
    {"nome":"Grantley","email":"gmcnabb9@github.io","genero":"Male","carro":"Mitsubishi","ano_carro":1988,"origem":"Brazil"},
    {"nome":"Maynord","email":"msimaa@arstechnica.com","genero":"Male","carro":"GMC","ano_carro":2002,"origem":"Mexico"},
    {"nome":"Koenraad","email":"kbisgroveb@symantec.com","genero":"Male","carro":"Lincoln","ano_carro":1989,"origem":"Brazil"},
    {"nome":"Karlene","email":"kbaylayc@ovh.net","genero":"Female","carro":"Honda","ano_carro":1984,"origem":"Brazil"},
    {"nome":"Zollie","email":"zbrittaind@mtv.com","genero":"Male","carro":"Land Rover","ano_carro":2000,"origem":"Mexico"},
    {"nome":"Kyla","email":"ktrevinoe@tinyurl.com","genero":"Female","carro":"GMC","ano_carro":2009,"origem":"Argentina"},
    {"nome":"Cherida","email":"cburgoinf@va.gov","genero":"Female","carro":"Hyundai","ano_carro":2009,"origem":"Mexico"},
    {"nome":"Daron","email":"dledrung@photobucket.com","genero":"Male","carro":"Chevrolet","ano_carro":2003,"origem":"Argentina"},
    {"nome":"Meaghan","email":"mpeartonh@google.nl","genero":"Female","carro":"Honda","ano_carro":2010,"origem":"Argentina"},
    {"nome":"Magdaia","email":"mrasselli@nytimes.com","genero":"Female","carro":"Dodge","ano_carro":1999,"origem":"Brazil"},
    {"nome":"Brandon","email":"bbettamj@google.com.br","genero":"Male","carro":"BMW","ano_carro":1992,"origem":"Mexico"},
    {"nome":"Fidel","email":"ftwigginsk@microsoft.com","genero":"Male","carro":"BMW","ano_carro":1959,"origem":"Brazil"},
    {"nome":"Jaye","email":"jweaferl@mail.ru","genero":"Male","carro":"Suzuki","ano_carro":2009,"origem":"Argentina"},
    {"nome":"Gussy","email":"gmaliam@blog.com","genero":"Female","carro":"Mitsubishi","ano_carro":1996,"origem":"Brazil"},
    {"nome":"Barbee","email":"bcreenann@bloomberg.com","genero":"Female","carro":"Mazda","ano_carro":1985,"origem":"Mexico"},
    {"nome":"Vito","email":"vmoraleso@webnode.com","genero":"Male","carro":"Honda","ano_carro":2009,"origem":"Brazil"},
    {"nome":"Dorolisa","email":"dbruggenp@e-recht24.de","genero":"Agender","carro":"Chevrolet","ano_carro":1995,"origem":"Mexico"},
    {"nome":"Adele","email":"aothenq@google.fr","genero":"Female","carro":"Ford","ano_carro":2008,"origem":"Brazil"},
    {"nome":"Trevor","email":"tcantir@answers.com","genero":"Male","carro":"Porsche","ano_carro":2011,"origem":"Argentina"},
    {"nome":"Clarke","email":"ccunrados@seattletimes.com","genero":"Polygender","carro":"Pontiac","ano_carro":2008,"origem":"Argentina"},
    {"nome":"Godfree","email":"gdrustt@nifty.com","genero":"Male","carro":"Acura","ano_carro":1988,"origem":"Mexico"},
    {"nome":"Truman","email":"tseathwrightu@ebay.com","genero":"Male","carro":"Ford","ano_carro":2004,"origem":"Brazil"},
    {"nome":"Trstram","email":"tpipetv@yandex.ru","genero":"Male","carro":"Ford","ano_carro":2003,"origem":"Brazil"},
    {"nome":"Culver","email":"cdrewettw@wisc.edu","genero":"Male","carro":"GMC","ano_carro":1998,"origem":"Brazil"},
    {"nome":"Leupold","email":"lgadeauxx@joomla.org","genero":"Male","carro":"Honda","ano_carro":1998,"origem":"Brazil"},
    {"nome":"Freddie","email":"flangstoney@digg.com","genero":"Female","carro":"Mercury","ano_carro":1990,"origem":"Mexico"},
    {"nome":"Branden","email":"bstiegersz@disqus.com","genero":"Genderqueer","carro":"Land Rover","ano_carro":2010,"origem":"Brazil"},
    {"nome":"Rowney","email":"rfarquar10@walmart.com","genero":"Male","carro":"Plymouth","ano_carro":1994,"origem":"Mexico"},
    {"nome":"Melvyn","email":"mledley11@nhs.uk","genero":"Male","carro":"Maybach","ano_carro":2005,"origem":"Brazil"},
    {"nome":"Benedicta","email":"bnorthwood12@themeforest.net","genero":"Female","carro":"Infiniti","ano_carro":1997,"origem":"Mexico"},
    {"nome":"Demetre","email":"ddillicate13@wordpress.org","genero":"Male","carro":"Infiniti","ano_carro":1997,"origem":"Argentina"},
    {"nome":"Rebekkah","email":"rslocum14@vk.com","genero":"Female","carro":"Mazda","ano_carro":1995,"origem":"Brazil"},
    {"nome":"Josepha","email":"jlahiff15@myspace.com","genero":"Female","carro":"Volvo","ano_carro":2008,"origem":"Brazil"},
    {"nome":"Ewart","email":"etofano16@twitter.com","genero":"Male","carro":"Hyundai","ano_carro":1999,"origem":"Brazil"},
    {"nome":"Alvin","email":"akoubu17@marriott.com","genero":"Male","carro":"Lincoln","ano_carro":2005,"origem":"Brazil"},
    {"nome":"Leyla","email":"ldoxsey18@youtu.be","genero":"Female","carro":"Pontiac","ano_carro":1997,"origem":"Brazil"},
    {"nome":"Missy","email":"mlinner19@phpbb.com","genero":"Female","carro":"Fillmore","ano_carro":1960,"origem":"Argentina"},
    {"nome":"Trista","email":"tsaura1a@about.me","genero":"Female","carro":"Nissan","ano_carro":2005,"origem":"Brazil"},
    {"nome":"Keenan","email":"kmorch1b@icio.us","genero":"Male","carro":"Infiniti","ano_carro":2008,"origem":"Mexico"},
    {"nome":"Donia","email":"dberkowitz1c@pagesperso-orange.fr","genero":"Female","carro":"Smart","ano_carro":2010,"origem":"Brazil"},
    {"nome":"Christophorus","email":"cbutting1d@google.ru","genero":"Agender","carro":"BMW","ano_carro":2008,"origem":"Argentina"},
    {"nome":"Teodorico","email":"tbanasevich1e@joomla.org","genero":"Male","carro":"GMC","ano_carro":2010,"origem":"Argentina"},
    {"nome":"Matty","email":"mgilmartin1f@chicagotribune.com","genero":"Female","carro":"Shelby","ano_carro":1969,"origem":"Brazil"},
    {"nome":"Arny","email":"arapo1g@hatena.ne.jp","genero":"Male","carro":"Chevrolet","ano_carro":2006,"origem":"Brazil"},
    {"nome":"Stinky","email":"sbein1h@samsung.com","genero":"Male","carro":"GMC","ano_carro":1998,"origem":"Brazil"},
    {"nome":"Benedicto","email":"bevesque1i@imageshack.us","genero":"Male","carro":"Chevrolet","ano_carro":1998,"origem":"Brazil"},
    {"nome":"Ilse","email":"idemeis1j@live.com","genero":"Female","carro":"Chevrolet","ano_carro":2007,"origem":"Brazil"},
    {"nome":"Warde","email":"wyitzovitz1k@wikipedia.org","genero":"Male","carro":"Lamborghini","ano_carro":2008,"origem":"Mexico"},
    {"nome":"Tobias","email":"tmasser1l@qq.com","genero":"Male","carro":"Lincoln","ano_carro":2002,"origem":"Bolivia"},
    {"nome":"Harrison","email":"hbeen1m@columbia.edu","genero":"Male","carro":"Acura","ano_carro":2004,"origem":"Brazil"},
    {"nome":"Donall","email":"dwainscot1n@nifty.com","genero":"Bigender","carro":"Cadillac","ano_carro":2010,"origem":"Brazil"},
    {"nome":"Teodoro","email":"ttownes1o@e-recht24.de","genero":"Male","carro":"Mitsubishi","ano_carro":1985,"origem":"Argentina"},
    {"nome":"Arvie","email":"ahemms1p@theglobeandmail.com","genero":"Male","carro":"Pontiac","ano_carro":2007,"origem":"Argentina"},
    {"nome":"Tammie","email":"twinfrey1q@dagondesign.com","genero":"Female","carro":"BMW","ano_carro":2000,"origem":"Mexico"},
    {"nome":"Hy","email":"hbeecker1r@mtv.com","genero":"Male","carro":"Oldsmobile","ano_carro":1996,"origem":"Brazil"},
    {"nome":"Viole","email":"vpeachman1s@prnewswire.com","genero":"Female","carro":"Toyota","ano_carro":2012,"origem":"Argentina"},
    {"nome":"Guinna","email":"gforshaw1t@house.gov","genero":"Female","carro":"Mercedes-Benz","ano_carro":2009,"origem":"Argentina"},
    {"nome":"Leese","email":"lsatch1u@spotify.com","genero":"Female","carro":"Pontiac","ano_carro":2001,"origem":"Argentina"},
    {"nome":"Devora","email":"dteideman1v@mac.com","genero":"Bigender","carro":"Mitsubishi","ano_carro":2000,"origem":"Brazil"},
    {"nome":"Zacharia","email":"zdumbrell1w@microsoft.com","genero":"Male","carro":"Volkswagen","ano_carro":1985,"origem":"Brazil"},
    {"nome":"Ynez","email":"ybushrod1x@weebly.com","genero":"Female","carro":"Dodge","ano_carro":2007,"origem":"Mexico"},
    {"nome":"Mellie","email":"mmattecot1y@xinhuanet.com","genero":"Female","carro":"Suzuki","ano_carro":1998,"origem":"Brazil"},
    {"nome":"Yves","email":"yflaherty1z@miibeian.gov.cn","genero":"Male","carro":"Ford","ano_carro":1996,"origem":"Argentina"},
    {"nome":"Bob","email":"bnaisbet20@ning.com","genero":"Male","carro":"Toyota","ano_carro":2012,"origem":"Brazil"},
    {"nome":"Benny","email":"bscarsbrooke21@businesswire.com","genero":"Agender","carro":"Pontiac","ano_carro":1997,"origem":"Mexico"},
    {"nome":"Gaynor","email":"gnarup22@ycombinator.com","genero":"Female","carro":"Dodge","ano_carro":2006,"origem":"Argentina"},
    {"nome":"Colas","email":"cthurling23@dailymail.co.uk","genero":"Male","carro":"Chevrolet","ano_carro":1992,"origem":"Brazil"},
    {"nome":"Shaylah","email":"slodovichi24@plala.or.jp","genero":"Female","carro":"Saturn","ano_carro":2006,"origem":"Mexico"},
    {"nome":"Dolly","email":"dblase25@pcworld.com","genero":"Female","carro":"Mazda","ano_carro":1985,"origem":"Argentina"},
    {"nome":"Harriett","email":"hthackeray26@slate.com","genero":"Female","carro":"Dodge","ano_carro":2007,"origem":"Brazil"},
    {"nome":"Yank","email":"ykittman27@drupal.org","genero":"Male","carro":"GMC","ano_carro":1992,"origem":"Brazil"},
    {"nome":"Clemmie","email":"cgerrietz28@google.it","genero":"Male","carro":"Mitsubishi","ano_carro":2010,"origem":"Brazil"},
    {"nome":"Myrtie","email":"mmoodey29@amazon.de","genero":"Female","carro":"Buick","ano_carro":1993,"origem":"Brazil"},
    {"nome":"Danna","email":"dchilton2a@mit.edu","genero":"Female","carro":"Chrysler","ano_carro":2004,"origem":"Bolivia"},
    {"nome":"Alain","email":"araoux2b@de.vu","genero":"Male","carro":"Dodge","ano_carro":1978,"origem":"Argentina"},
    {"nome":"Basilius","email":"bericsson2c@goo.ne.jp","genero":"Male","carro":"Chevrolet","ano_carro":1998,"origem":"Mexico"},
    {"nome":"Kimball","email":"kspurdon2d@xrea.com","genero":"Agender","carro":"Nissan","ano_carro":2012,"origem":"Brazil"},
    {"nome":"Appolonia","email":"akubas2e@ycombinator.com","genero":"Female","carro":"BMW","ano_carro":2010,"origem":"Brazil"},
    {"nome":"Tilly","email":"tdrexel2f@simplemachines.org","genero":"Female","carro":"Ford","ano_carro":2008,"origem":"Brazil"},
    {"nome":"Cissy","email":"cclench2g@ft.com","genero":"Bigender","carro":"Honda","ano_carro":2005,"origem":"Brazil"},
    {"nome":"Antonius","email":"achansonne2h@noaa.gov","genero":"Male","carro":"Porsche","ano_carro":1987,"origem":"Brazil"},
    {"nome":"Emmott","email":"elaxen2i@altervista.org","genero":"Agender","carro":"Subaru","ano_carro":1994,"origem":"Brazil"},
    {"nome":"Amberly","email":"acolnett2j@mozilla.org","genero":"Female","carro":"Ferrari","ano_carro":2010,"origem":"Mexico"},
    {"nome":"Chadd","email":"croelofs2k@techcrunch.com","genero":"Male","carro":"Toyota","ano_carro":1999,"origem":"Brazil"},
    {"nome":"Stacee","email":"santuoni2l@google.ca","genero":"Female","carro":"Geo","ano_carro":1993,"origem":"Brazil"},
    {"nome":"Goldarina","email":"gcongreve2m@discuz.net","genero":"Female","carro":"Hyundai","ano_carro":2004,"origem":"Brazil"},
    {"nome":"Brynne","email":"bblazy2n@apache.org","genero":"Female","carro":"Lotus","ano_carro":2004,"origem":"Brazil"},
    {"nome":"Kaja","email":"kjeness2o@disqus.com","genero":"Female","carro":"Suzuki","ano_carro":1993,"origem":"Argentina"},
    {"nome":"Elwyn","email":"ebeddie2p@hhs.gov","genero":"Male","carro":"Porsche","ano_carro":2002,"origem":"Argentina"},
    {"nome":"Kenny","email":"ksommerling2q@prlog.org","genero":"Male","carro":"Toyota","ano_carro":2002,"origem":"Mexico"},
    {"nome":"Paul","email":"pfehely2r@addthis.com","genero":"Male","carro":"Ford","ano_carro":2012,"origem":"Bolivia"},
    ]
    } 

    retorn = []

    var retorn = pegaDados()
    var array = []
    for(let i = 0; i <retorn.length; i++){
        array[i] = [];
    }
    for(i=0;i<retorn.length;i++){
    
        array[i][0] = retorn[i]["nome"]
        array[i][1] = retorn[i]["email"]
        array[i][2] = retorn[i]["genero"]
        array[i][3] = retorn[i]["carro"]
        array[i][4] = retorn[i]["ano_carro"]
        array[i][5] = retorn[i]["origem"]
    }

    


 
    
    


