const express = require("express");
const expressHandlebars = require("express-handlebars");
const bodyParser = require('body-parser');


const port = process.env.PORT || 3000;

const app = express();
// configure Handlebars view engine
app.engine("handlebars", expressHandlebars.engine({
    defaultLayout: "main",
    helpers: {
        eq: function (a, b) {
            return a === b;
        }
    }
}));

app.set("view engine", "handlebars");

app.use(express.static(__dirname + "/public"));
app.use(express.urlencoded({ extended: true }));

//home
app.get("/", (req, res) => {
  res.render("home", {
    title: "Home",
    cta: "Kom langs en ontdek waar de smaak te vinden is!",
    descMenu: "Bij China Garden geniet je van een gevarieerd menu, van heerlijke soepen tot smaakvolle hoofdgerechten. We bieden biologische en vegetarische opties, perfect voor iedere smaak. Ontdek een culinaire ervaring van topkwaliteit!",
    descLocation: "Gelegen in het hart van Izegem, aan de Baron De Pelichystraat 27, is China Garden gemakkelijk bereikbaar en biedt een gezellige, rolstoeltoegankelijke sfeer. Kom langs en ervaar de gastvrijheid van ons restaurant!",
    descOrder: "Craving Chinese food? Bestel eenvoudig online bij China Garden en geniet van onze heerlijke gerechten, direct bij jou thuis geleverd. Proef de authentieke smaken van onze keuken, waar je ook bent!"


    
  });
});

//menu
app.get("/menu", (req, res) => {
    res.render("menu", {
      title: "Menu",
      soepen: [
        { name: "Tomatensoep", price: "€4.00" },
        { name: "Kippensoep", price: "€4.00" },
        { name: "Bamboesoep", price: "€4.00" },
        { name: "Champignonsoep", price: "€4.00" },
        { name: "Chinese champignonsoep", price: "€4.00" },
        { name: "Groentesoep met kip", price: "€4.00" },
        { name: "Seun Lak Soep", price: "€4.50" },
        { name: "Haaienvinnensoep", price: "€5.00" },
        { name: "Kreeftensoep", price: "€5.00" }
      ],

      voorgerechten: [
        { name: "Mini Loempia (6 stuks)", price: "€4.00" },
        { name: "Loempia met Kip", price: "€4.50" },
        { name: "Loempia met Krab", price: "€5.00" },
        { name: "Kipsate (3 stuks)", price: "€6.50" }
    ],

      hoofdgerechten: [
        { name: "Kikkerbilletjes in Szu Chuan Saus", price: "€16.00" },
        { name: "Kippenlapjes in Szu Chuan Saus", price: "€12.00" },
        { name: "Varkensvlees in King Too Saus", price: "€13.00" },
        { name: "Runderlapjes met Chinese Champignons", price: "€14.50" },
        { name: "Chinese Garnalen met Lookboter", price: "17.00" }
      ],

    
    nasi_gerechten: [
        { name: "Nasi Goreng Vegetarisch", price: "€11.00" },
        { name: "Nasi Goreng met Kip", price: "€12.00" },
        { name: "Nasi Goreng met Rundvlees", price: "€12.00" },
        { name: "Nasi Goreng met Chinese Garnalen", price: "16.50" }
    ],

    



        
    });
  });

//location
app.get("/location", (req, res) => {
    res.render("location", {
      title: "Location",
      maps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20123.0216362704!2d3.174470174316406!3d50.91672969999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c33771cfd6aecb%3A0x9b2d132ac413d9d6!2sChina%20Garden!5e0!3m2!1sen!2sbe!4v1740921451693!5m2!1sen!2sbe"
  
    });
  });

//about
app.get("/about", (req, res) => {
    res.render("about", {
      title: "About",
      paragraph1: "China Garden is een uitstekend Chinees restaurant in Izegem, België, gelegen aan de Baron De Pelichystraat 27. Het restaurant heeft een score van 4,2 uit 5 op basis van 82 beoordelingen en staat bekend om zijn uitstekende service en kwaliteit. De sfeer is casual, ideaal voor zowel lunch als diner, en het restaurant is rolstoeltoegankelijk.",
      paragraph2: "China Garden biedt biologische en vegetarische opties en is LGBTQ+ vriendelijk, waardoor het een inclusieve en gastvrije omgeving is. Gezinnen zijn welkom, met een kindvriendelijk menu. Reserveringen zijn mogelijk, en het restaurant accepteert alleen contante betalingen.",
      paragraph3: "De centrale ligging maakt het gemakkelijk bereikbaar, en China Garden biedt een geweldige eetervaring voor zowel lokale bewoners als bezoekers. Het restaurant wordt sterk aanbevolen voor wie van heerlijke Chinese gerechten houdt."
  
    });
  });

//contact
app.get("/contact", (req, res) => {
  res.render("contact", {
    title: "Contact"

  });
});

app.post("/contact", (req, res, next) => {
  const form = req.body;
  console.log(req.body);
  res.redirect("/contact/form-sent");
});

//form-sent page
app.get("/contact/form-sent", (req, res) => {
  res.render("form-sent", {
    title: "Je bericht is verstuurt!",
    message: "We contacteren je via je email adress wanneer iemand je bericht verwerkt.",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJaHFw5qECOYKiOtWj_OW2IOjlAkbYPrieUg&s"
  });
});

// custom 404 page
app.use((req, res) => {
  res.render("errors/404");
})
// custom 500 page
app.use((err, req, res, next) => {
  console.error(err.message);
  res.render("errors/500");
});
app.listen(port, () => console.log(
  `Express started on http://localhost:${port}; ` +
  `press Ctrl-C to terminate.`));
