var url01 ="https://maps.googleapis.com/maps/api/js?key=";
var url02 ="&map_ids=";
var url03 ="&callback=initMap";
console.log(url01 + process.env.API_KEY +url02 + process.env.MAP_ID + url03);

function initMap(){
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 40.0691, lng: 45.0382},
        zoom: 7.5,
        mapId: '610d1c288eb5425a',
        disableDefaultUI: true,
        zoomControl: true
        });


    // Name
    // Latitude, Longitude
    // Image URL
    // ScaledSize width, height
    const locations = [
        [ "Tatev Monastery",
            39.38002179353214,
            46.250608922752825,
            "images/tatev01.png",
            80,
            63,
            "Tatev Monastery is a 9th century historical monument. It is one of the oldest and most famous monastery complexes in Armenia. During medieval times Tatev Monastery was a vital scholastic, enlightenment and spiritual center and played a singular role in the country’s history. " 
        ],
        [
            "Noravank Monastery",
            39.685512588469905,
            45.23315335344104,
            "images/noravank01.png",
            80,
            63,
            "Noravank means “New Monastery” in Armenian. However, today this name does not fit, as the monastery is already more than seven centuries old. The beautiful Noravank Monastery was built in the 13th century on the ledge of narrow winding gorge above the Amaghu River, near the city of Yeghegnadzor. The spare lines of the church contrast beautifully with the sharp red rock cliffs, and the dramatic scenery is one of the best reasons to visit Noravank. The monastery is sometimes called Amagu Noravank, to distinguish it from Noravank Monastery in the city of Goris. Amagu is the name of a small settlement which used to stand over the gorge."
        ],
        [
            "Garni Temple",
            40.11295037859869, 
            44.73190120253675,
            "images/garni01.png",
            80,
            63,
            "Temple of Garni The Temple of Garni is a classical Hellenistic temple in Garni, Armenia. It is perhaps the best-known structure and symbol of pre-Christian Armenia.The temple was dedicated to Mythra, a deity popular in the Near East which became the patron goddess of the Roman Empire in the period before Christianity."
        ],
        [
            "Amberd fortress",
            40.38763773926116,
            44.228298987485225,
            "images/amberd01.png",
            80,
            63,
            'Amberd, the largest standing fortress in Armenia, is located on the southern slopes of Mount Aragats, on a triangular cape where the rivers Arkashen and Amberd join. Amberd means “a fortress in the clouds," a fitting name given its elevation at 2 300 m above sea level. The mansion and some sections of the walls were constructed in the 7th century by the noble house of Kamsarakan. '
           ],
           [
            "Yerevan Cascade",
            40.18911275152402,
            44.515720163258464,
            "images/kaskad01.png",
            80,
            63,
            'The Cascade is a giant stairway made of limestone in Yerevan, Armenia. It links the downtown Kentron area of Yerevan with the Monument neighborhood (Arabkir and Kanaker-Zeytun districts)'
            ],
            [
                "Haghpat Monastery Complex",
                41.093945347840005, 
                44.711858567034525,
                "images/haghpat01.png",
                80,
                63,
                'Haghpat is a medieval monastery complex located in the village of Haghpat in Lori Region. It was built in the 10th century and during the 10th-13th centuries, Haghpat was an eminent spiritual and cultural centre of Armenia. The monastery was famous for its rich library and a school where pupils were taught philosophy, rhetoric, music and manuscript illumination.The Monastery of Haghpat is one of the largest and the most impressive monasteries in Armenia. The main characteristics of the Medieval Armenian architecture are reflected in the buildings of this magnificent monastery. The monastery includes the churches of Saint Nshan, Saint Grigor and Saint Astvatsatsin, a churchyard, a repository, a bell tower, a refectory, many Khachkars (cross-stones) and other constructions. The complex was surrounded by high walls to protect from the attacks. ' 
              ],
              [
                "Lake Arpi",
                41.06860976512788, 
                43.62802860926982,
                "images/arpi01.png",
                80,
                63,
                'Lake Arpi is located in the Shirak region of Armenia, on the Ashotsk plateau, on the border with Turkey and Georgia, at an altitude of 2023 m above sea level. It used to be a small lake with an area of 4.5 square kilometers and depth of 1.6 m. The water in the lake was forming from nearby mountain springs, streams and melted snow. Due to the intensive grazing of livestock by locals, Lake Arpi and the surrounding areas were threatened with drought. Therefore, during 1946-1951, the lake was artificially enlarged and turned into a reservoir. After that, the area of the lake increased to 22 square kilometers, the volume of water became 100 cubic meters, and the average depth in the lake reached 4 meters.' 
            ]

    ];

    for (let i = 0; i < locations.length; i++ ) {
        const location = locations[i];
        const marker = new google.maps.Marker({
            position: {lat: location[1], lng: location[2]},
            map,
            title: location[0],
            icon: {
                url: location[3],
                scaledSize: new google.maps.Size(location[4],location[5])
            },
            animation: google.maps.Animation.DROP,
        });

        const infowindow = new google.maps.InfoWindow({
            content: '<div><h1 style="text-align:center;"> ' + location[0] + '</h1>' + '<p  style="text-align:center; width:95%; border-width:10">' + location[6]+' </p>' + '<IMG BORDER="0" ALIGN="Left" SRC="' + location[3] +'"  width="300" height="215"></IMG></div>',
            maxWidth: 340,   
        });
    
        
    
            marker.addListener('click', () => {
                infowindow.open(map, marker);
            });
    }
}