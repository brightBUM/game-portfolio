const projects = [

    // ======================================================
    // COMMERCIAL GAMES
    // ======================================================

    {
        id: "slunkey",
        featured: true,
        section: "commercial",

        title: "Slunkey",
        subtitle: "Physics Based Platformer",

        role: "Game Programmer",

        engine: "Unity",

        platforms: ["Android","iOS"],

        description: "A physics-based platformer featuring unique slime movement mechanics.",

        details: `
            Slunkey is a physics-based platformer where the player controls
            a slime character through challenging platforming levels.

            The project focused on creating responsive physics-based movement,
            level progression, and gameplay systems.

            More detailed information about the mechanics, implementation,
            challenges, and my contributions can go here.
        `,

        image: "/projects/slunkey/1.png",
        video: "/projects/slunkey/hero.mp4",

        gallery:[
            "/projects/slunkey/ss1.png",
            "/projects/slunkey/ss3.png",
            "/projects/slunkey/Shop.png"
        ],

        technologies:[
            "Unity",
            "C#",
            "DOTween",
            "URP"
        ],

        contributions:[
            "Gameplay Programming",
            "Player Controller",
            "Checkpoint System",
            "Camera System"
        ],
        
        technicalHighlights: 
        [
            {
                title: "Respawn System",
                description: "A ghost respawn mechanic which lerps the player to the last checkpoint via particle effects",
                media: [
                     "/projects/slunkey/respawn.gif",
                     "/projects/slunkey/respawn 2.mp4"
                ]
            },
            {
                title: "Chunk based Level Generator",
                description: `The dungeon levels in the game are generated at runtime from a pool of UP,Right,Down chunk prefabs 
                which are then joined at runtime via tilemap cells and the prefab objects under one grid system.
                So everytime player drops down in the dungeon, he experiences new levels`,
                media : [ "/projects/slunkey/Slunkey level generattion.mp4"]
            }
        ],

        links:{
            playstore:"https://play.google.com/store/apps/details?id=com.KyodaiGameworks.Slunkey&hl=en_IN&pli=1",
            appstore:"https://apps.apple.com/sn/app/slunkey-slime-monkey-escape/id6749671937"
        }
    },

    {
        id:"shaolin",

        featured:true,

        section:"commercial",

        title:"Shaolin vs Wutang 2",

        subtitle:"Xbox Console Port",

        role:"Game Programmer",

        engine:"Unity",

        platforms:["Xbox"],

        description:
            "Worked on the Xbox release.",
        details:
            `Shaolin vs Wutang 2 is an Indie Martial arts fighting game with 22 Characters and 
            20 map locations and 6 game modes. Worked on Porting this Title to Xbox platform `,

        image:"/projects/shaolin/1.jpeg",

        video:null,

        gallery:[
            "/projects/shaolin/1.jpeg",
            "/projects/shaolin/shaolin_2.jpeg",

        ],

        technologies:[
            "Unity",
            "C#"
        ],

        contributions:[
            "Game Save/Load - File System",
            "Localization",
            "Local LeaderBoard",
            "Xbox Achievements"
        ],
        technicalHighlights: [],
        links:{
            xbox : "https://www.xbox.com/en-IN/games/store/shaolin-vs-wutang-2/9N959HRT0CZS"
        }
    },

    {
        id:"railrush",

        featured:true,

        section:"commercial",

        title:"Rail Rush Runner",

        subtitle:"Endless Runner",

        role:"Game Programmer",

        engine:"Unity",

        platforms:["Android"],

        description:
            "Hypercasual endless runner.",

        image:"/projects/railrush/1.jpg",

        video:null,

        gallery:[
            "/projects/railrush/1.jpg",
            "/projects/railrush/rail_1.jpg",
            "/projects/railrush/rail_3.jpg"

        ],

        technologies:[
            "Unity",
            "Firebase",
            "IronSource",
            "Google Ads"
        ],

        contributions:[
            "Ad Integration with IronSource & Google Admob",
            "In app purchases",
            "Firebase Analytics,Remote Configs",
            "Character unlock and selection"  
        ],
        technicalHighlights: [],

        links:{
            playstore:"https://play.google.com/store/apps/details?id=com.LineUpInfotech.EscapeRoadRunner&hl=en&gl=US"
        }
    },



    // ======================================================
    // UNITY
    // ======================================================

    {
        id:"topdown",

        section:"unity",

        title:"Top Down Shooter",

        subtitle:"Wave Survival",

        image:"/projects/topdown/1.jpg",

        video:"/projects/topdown/hero.mp4",

        description:"Wave based shooter.",

        technologies:["Unity","C#"],

        gallery:[],

        contributions:[],

        platforms:[],

        engine:"Unity",

        
    },

    {
        id:"DracoSnake",

        section:"unity",

        title:"DracoSnake",

        subtitle:"HyperCasual",

        image:"/projects/dracosnake/1.png",

        video:null,

        description:"A HyperCasual Snake Puzzle.",

        details:`A fast-paced, puzzle-driven snake game where every floor is a new challenge. 
        Guide your snake across increasingly difficult floors, solve the puzzle, 
        unlock the way forward, and keep ascending.

        But this isn't your classic Snake game.

        Each floor is a compact puzzle that challenges you to think about movement, positioning,
        timing, and the shape of your snake. Collect everything you need, destroy obstacles, 
        form specific patterns, and find the path to the next floor.

        The higher you go, the more complicated things become.`,

        technologies:["Unity","C#"],

        gallery:[
            "/projects/dracosnake/2.png",
            "/projects/dracosnake/3.png",
            "/projects/dracosnake/4.png"
        ],

        contributions:[],

        platforms:["Android"],

        engine:"Unity",
      
        links:{
            itch:"https://ram-manohar.itch.io/dracosnake"
        }
    },

    {
        id:"terrainscan",

        section:"unity",

        title:"Terrain Scan",

        subtitle:"Shader Experiment",

        image:"/projects/terrainscan/1.jpg",

        video:"/projects/terrainscan/hero.mp4",

        description:"Terrain scanning shader mechanic.",

        technologies:["Unity","Shader Graph"],

        gallery:[],

        contributions:[],

        platforms:[],

        engine:"Unity"
    },

    {
        id:"2p5d",

        section:"unity",

        title:"2.5D Camera",

        subtitle:"Camera Prototype",

        image:"/projects/2p5d/1.jpg",

        video:"/projects/2p5d/hero.mp4",

        description:"Perspective camera system.",

        technologies:["Unity"],

        gallery:[],

        contributions:[],

        platforms:[],

        engine:"Unity"
    },



    // ======================================================
    // OPENGL
    // ======================================================

    {
        id:"beziercurve",

        section:"opengl",

        title:"Bezier Curve Editor",

        subtitle:"Graphics Programming",

        image:"/projects/bezier curve/2.png ",

        video:"/projects/bezier curve/Bezier curve.mp4",

        description:"Interactive Bezier curve editor.",

        technologies:["C++","OpenGL","GLSL"],

        gallery:[
            "/projects/bezier curve/1.png ",
            "/projects/bezier curve/2.png "
        ],

        contributions:[],

        platforms:[],
        technicalHighlights: 
        [
            {
                title: "Object Follows Curve Path",
                description: `Making a 2D Object Follow a Bezier curve ,which gets modified at runtime.
                Left click to move points , Right Click to add new Points.
                Bezier Curve evaluated via Decastle Jau's Method`,
                media: [
                     "/projects/bezier curve/Bezier curve.mp4"
                ]
            },
            {
                title: "Curve Visualize and Subdivide",
                description: `Visualizing all the sample points on the derived curve via DecastleJau's Algorithm
                Can Further Subdivide the curve at chosen interpolation value which gives us two curves of same order `,
                media : [ 
                    "/projects/bezier curve/video2.mp4"
                ]
            }
        ],
        engine:"OpenGL"
    },

    {
        id:"beziersurface",

        section:"opengl",

        title:"Bezier Surface",

        subtitle:"Graphics Programming",

        image:"/projects/beziersurface/bezier_1.png",

        video:"/projects/beziersurface/hero.mp4",

        description:"Bezier surface editor.",

        technologies:["C++","OpenGL"],

        gallery:[],

        contributions:[],

        platforms:[],

        engine:"OpenGL"
    },

    {
        id:"elastic",

        section:"opengl",

        title:"Elastic Collision",

        subtitle:"Physics",

        image:"/projects/elastic/1.png",

        video:"/projects/elastic/collision.mp4",

        description:"2D elastic collision simulation.",

        technologies:["C++","OpenGL"],

        gallery:[
            "/projects/elastic/1.png",
            "/projects/elastic/2.png"
        ],

        contributions:[],

        platforms:[],

        engine:"OpenGL"
    },

    {
        id:"texturescroll",

        section:"opengl",

        title:"Fake 2D Roll",

        subtitle:"Faking 2D roll by scrolling UV",

        image:"/projects/texturescroll/1.png",

        video:"/projects/texturescroll/uv scroll ball.mp4",

        description:"Faking 2D roll by scrolling UV",
        details:"Faking 2D roll by scrolling texture UV coords base on ball speed and direction",
        technologies:["C++","OpenGL"],

        gallery:[],

        contributions:[],

        platforms:[],

        engine:"OpenGL"
    },



    // ======================================================
    // GAME JAMS
    // ======================================================

    {
        id:"croak",

        section:"gamejam",

        title:"Croak & Leap",

        subtitle:"Global Game Jam 2025",

        image:"/projects/croak/1.png",

        video:"/projects/croak/hero.mp4",

        description: "2D Top Down Puzzle Game",

        details:`Meet Freddy the Frog, the world’s most unusual amphibian. He’s got the hops, he’s got the tongue… but swimming? Nope, not Freddy’s forte. Poor Freddy finds himself stranded on one side of a bubbling, tricky river with no way to swim across. But don’t worry—he’s got a secret weapon: his mighty CROAK!

                In this quirky adventure, Freddy uses his croaking skills to pop mysterious bubbles floating on the river. Some bubbles reveal safe stepping stones, while others… well, let’s just say they lead to a splashy surprise.

                Can Freddy outwit the river and make it to the other side, or will he be forever stuck on dry land? Leap in and help our froggy friend find his way—one croak at a time!
                `,

        technologies:["Unity","Aesprite"],

        gallery:[
            "/projects/croak/1.png",
            "/projects/croak/2.png",
            "/projects/croak/3.jpg"
        ],

        contributions:[],

        platforms:[],

        engine:"Unity",

        links: {
                itch: "https://ram-manohar.itch.io/croak-and-leap"
        }
    },

    {
        id:"projectv1",

        section:"gamejam",

        title:"Project V1",

        subtitle:" WTF x IGDC Jam 2024",

        image:"/projects/projectv1/1.jpg",

        video:"/projects/projectv1/hero.mp4",

        description:"2D Top Down Stealth Game",

        details:`A Virus gets planted in a computer system and travels through different parts 
        of the computer to corrupt the system while running away from the antivirus.
        Made for WTF x IGDC Jam 2024 with the theme of Tiny World, Big Adventures`,

        technologies:["Unity","PhotoShop"],

        gallery:[
            "/projects/projectv1/1.jpg",
            "/projects/projectv1/2.jpg",
            "/projects/projectv1/3.jpg"
        ],

        contributions:[],

        platforms:[],

        engine:"Unity",

         links: {
                itch: "https://blazeknight237.itch.io/project-v1"
        }
    },

    {
        id:"hatrix",

        section:"gamejam",

        title:"Hatrix",

        subtitle:"BYOG Game Jam 2024",

        image:"/projects/hatrix/1.png",

        video:"/projects/hatrix/hero.mov",

        description:"A 3D puzzle platformer set in space",

        details :`A 3D puzzle-solving platformer set in space, where players help Hatrix navigate 
        through challenging environments using three unique helmets—each with special abilities: 
        magnet, copter, and Lasers.Join Hatrix on her thrilling adventure to solve puzzles, 
        defeat enemies, and uncover the secrets of the cosmos!`,

        technologies:["Unity","Maya","PhotoShop"],

        gallery:[
             "/projects/hatrix/1.png",
            "/projects/hatrix/2.png",
            "/projects/hatrix/3.png",
            "/projects/hatrix/4.png"

        ],

        contributions:[],

        platforms:[],

        engine:"Unity",

         links: {
                itch: "https://ram-manohar.itch.io/hatrix"
        }
    }

];

export default projects;