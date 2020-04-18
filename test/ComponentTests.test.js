const agent = require('superagent');
const statusCode = require('http-status-codes');
const chai = require('chai');

const expect = chai.expect;

/*
The backend test is divided in two sections, one for the database connection, 
and one for the endpoints test, result of the data obtained from mysql database
*/

/*
Tests that the database connection with the backend can be established
*/
describe('Database connection Test', () => {

  it('Create a valid database connection with MySQL Database', async () => {
    var mysql = require("mysql");
    const con = mysql.createConnection({
    //host: '192.168.130.194',
    //host: '172.30.183.221',
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'dbAIK',
    port: '3306'
  });

  chai.assert(con!=null);
  con.end();
});
});


/*
Tests each endpoint for the backend component in the aik portal
*/

describe('Endpoints Tests', () => {

  it('Consume GET Service for / endpoint', async () => {
    const response = await agent.get('http://localhost:3000/');
    expect(response.status).to.equal(statusCode.OK);
  });

  it('Consume GET Service with query parameters for /buycars endpoint', async () => {
      const query = [  
        {
          title: "Ant-Man",
          releaseYear: "2015",
          score: 8,
          price: 70000000,
          description: "Modern Car 1.0CC",
          avatar: "https://vignette.wikia.nocookie.net/marvelcinematicuniverse/images/4/4b/Luis%27_Van_%28Quantum_Tunnel%29.png/revision/latest/scale-to-width-down/310?cb=20181002134025"
        },
        {
          title: "Pikanto",
          releaseYear: "2020",
          score: 6,
          price: 40000000,
          description: "Modern Car 1.0CC",
          avatar: "https://www.kia.com/content/dam/kwcms/co/es/images/showroom/PicantoNew/kia-co-picanto-ja.png"
        },
        {
          title: "Rio Jatchbash",
          releaseYear: "2014",
          score: 10,
          price: 50000000,
          description: "Modern Car 1.0CC",
          avatar: "https://www.kia.com/content/dam/kwcms/gt/en/images/vehicles/gnb/kia-rio-sc.png"
        },
        {
          title: "Rio zedan",
          releaseYear: "2016",
          score: 9,
          price: 30000000,
          description: "Modern Car 2.0CC",
          avatar: "https://www.kia.com/content/dam/kwcms/gt/en/images/vehicles/gnb/kia_rio_sc_4dr_17my.png"
        },
        {
          title: "Stringer",
          releaseYear: "2015",
          score: 7,
          price: 10000000,
          description: "Modern Car 1.6CC",
          avatar: "https://www.kia.com/content/dam/kwcms/co/es/images/showroom/stinger/kia-stinger.png"
        },
        {
          title: "Xerato",
          releaseYear: "2020",
          score: 8,
          price: 80000000,
          description: "Modern Car 1.6CC",
          avatar: "https://www.kia.com/content/dam/kwcms/co/es/images/shoppingtool/Cerato-Showroom.png"
        },
        {
          title: "Zoluto",
          releaseYear: "2016",
          score: 9,
          price: 20000000,
          description: "Modern Car 1.6CC",
          avatar: "https://www.kia.com/content/dam/kwcms/co/es/images/shoppingtool/Cerato-Showroom.png"
        }
    ]
    ;

    const response = await agent.get('localhost:3000/buycars').query(query);
    expect(response.status).to.equal(statusCode.OK);
    expect(response.body).to.eql(query);
  });

  

it('Consume GET Service with query parameters for /vehicles endpoint', async () => {
  const query = [  
    {
      title: "Ant-Man",
      releaseYear: "2015",
      score: 8,
      price: 70000000,
      description: "Modern Car 1.0CC",
      avatar: "https://vignette.wikia.nocookie.net/marvelcinematicuniverse/images/4/4b/Luis%27_Van_%28Quantum_Tunnel%29.png/revision/latest/scale-to-width-down/310?cb=20181002134025"
    },
    {
      title: "Pikanto",
      releaseYear: "2020",
      score: 6,
      price: 40000000,
      description: "Modern Car 1.0CC",
      avatar: "https://www.kia.com/content/dam/kwcms/co/es/images/showroom/PicantoNew/kia-co-picanto-ja.png"
    },
    {
      title: "Rio Jatchbash",
      releaseYear: "2014",
      score: 10,
      price: 50000000,
      description: "Modern Car 1.0CC",
      avatar: "https://www.kia.com/content/dam/kwcms/gt/en/images/vehicles/gnb/kia-rio-sc.png"
    },
    {
      title: "Rio zedan",
      releaseYear: "2016",
      score: 9,
      price: 30000000,
      description: "Modern Car 2.0CC",
      avatar: "https://www.kia.com/content/dam/kwcms/gt/en/images/vehicles/gnb/kia_rio_sc_4dr_17my.png"
    },
    {
      title: "Stringer",
      releaseYear: "2015",
      score: 7,
      price: 10000000,
      description: "Modern Car 1.6CC",
      avatar: "https://www.kia.com/content/dam/kwcms/co/es/images/showroom/stinger/kia-stinger.png"
    },
    {
      title: "Xerato",
      releaseYear: "2020",
      score: 8,
      price: 80000000,
      description: "Modern Car 1.6CC",
      avatar: "https://www.kia.com/content/dam/kwcms/co/es/images/shoppingtool/Cerato-Showroom.png"
    },
    {
      title: "Zoluto",
      releaseYear: "2016",
      score: 9,
      price: 20000000,
      description: "Modern Car 1.6CC",
      avatar: "https://www.kia.com/content/dam/kwcms/co/es/images/shoppingtool/Cerato-Showroom.png"
    }
]
;

const response = await agent.get('localhost:3000/vehicles').query(query);
expect(response.status).to.equal(statusCode.OK);
expect(response.body).to.eql(query);
});


it('Consume GET Service with query parameters for /support endpoint', async () => {
const query = [
  {
    name: "Mechanics Appointments",
    avatar: "glyphicon-eye-open"
  },
  {
    name: "Post-sale service",
    avatar: "glyphicon-fire"
  },
  {
    name: "Guarantee",
    avatar: "glyphicon-time"
  },
  {
    name: "Online manual",
    avatar: "glyphicon-record"
  },
  {
    name: "New AIK",
    avatar: "glyphicon-heart-empty"
  },
  {
    name: "safety campaigns",
    avatar: "glyphicon-globe"
  }
]
;

const response = await agent.get('localhost:3000/support').query(query);
expect(response.status).to.equal(statusCode.OK);
expect(response.body).to.eql(query);
});

it('Consume GET Service with query parameters for /publicidad endpoint', async () => {
  const query = [
    {
      nombre: "Universidad Icesi",
      imagen: "https://www.icesi.edu.co/launiversidad/images/La_universidad/logo_icesi.png",
      enlace: "https://www.icesi.edu.co/"
    },
    {
      nombre: "KIA Motors",
      imagen: "https://2.bp.blogspot.com/-1IclwlF94FU/VyjJWHxvmuI/AAAAAAAAAWk/pCoRpQbBGtYROHj3rxuuReG0lAf-oDbkgCLcB/s640/Kia_Power_to_Surprise.png",
      enlace: "https://www.kia.com/co/main.html?utm_source=googlesearch-ecselis&utm_medium=paidsearch&utm_content=cpc-sem-1x1marcakia3&utm_campaign=hmg-tactico&gclid=CjwKCAiA7t3yBRADEiwA4GFlI0rKxTmHUZkHxtbz__hkGuBt5emXPZpkc9aoaMbE74q9k-HAX-0CNhoCKzQQAvD_BwE"
    },
    {
      nombre: "Bristo",
      imagen: "https://bristo.com.co/wp-content/uploads/sites/65/2018/04/bristo-logo-web12f.png",
      enlace: "https://bristo.com.co/"
    }
  ]
  ;
  
  const response = await agent.get('localhost:3000/publicidad').query(query);
  expect(response.status).to.equal(statusCode.OK);
  expect(response.body).to.eql(query);
  });


  it('Consume GET Service with query parameters for /innovacion endpoint', async () => {
    const query = [
      {
        nombre: "Tecnología Futura",
        descripcion: "En AIK estamos dedicados a garantizar que el disfrute del conductor siga siendo una prioridad en el futuro de la movilidad",
        imagen: "https://www.stickpng.com/assets/images/580b585b2edbce24c47b2c4c.png"
      },
      {
        nombre: "Diseño",
        descripcion: "El poder para hacer realidad la imaginación",
        imagen: "https://pngimage.net/wp-content/uploads/2018/05/car-design-png-2.png"
      },
      {
        nombre: "Seguridad",
        descripcion: "Nuestros esfuerzos para garantizar tu seguridad",
        imagen: "https://www.wabco-auto.com/WabcoWeb/Images/solution-domain/EMEA-car-safety.png"
      }
    ]
    ;
    
    const response = await agent.get('localhost:3000/innovacion').query(query);
    expect(response.status).to.equal(statusCode.OK);
    expect(response.body).to.eql(query);
    });


  it('Consume GET Service with query parameters for /redsocial endpoint', async () => {
    const query = [
      {
        nombre: "Facebook",
        imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/240px-Facebook_Logo_%282019%29.png",
        enlace: "https://www.facebook.com/"
      },
      {
        nombre: "Instagram",
        imagen: "https://www.instagram.com/static/images/ico/xxhdpi_launcher.png/99cf3909d459.png",
        enlace: "https://www.instagram.com/"
      },
      {
        nombre: "Twitter",
        imagen: "https://cdn.icon-icons.com/icons2/1907/PNG/512/iconfinder-twitter-4555883_121368.png",
        enlace: "https://www.twitter.com/"
      }
    ]
    ;
    
    const response = await agent.get('localhost:3000/redsocial').query(query);
    expect(response.status).to.equal(statusCode.OK);
    expect(response.body).to.eql(query);
    });

});
