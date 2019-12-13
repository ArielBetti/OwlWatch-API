const nodemailer = require('nodemailer');

function sendMail(mail, alert, key, items) {
  
const transporter = nodemailer.createTransport({
    host: "owlwatch.mail@gmail.com",
    service: 'gmail',
    auth: {
      user: process.env.MAIL, // E-mail para envio de alertas.
      pass: process.env.MAILPASS // Senha do e-mail.
    }
  });

  const mailOptions = {
    from: 'owlwatch.mail@gmail.com',
    to: mail,
    subject: 'Aviso da coruja !',
    html: ` 
    <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>OwlWatch</title>
    <style>
        * {
            font-family: monospace;
        }

        body {
            padding: 0;
            margin: 0;
        }

        .conteudo {
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
        }

        .title {
            margin: 15px;
            font-size: 2.25em;
        }

        .sub {
            margin-bottom: 30px;
            font-size: 1.25em;
        }

        .cardA {
            background-color: #fff;
            border: none;
            color: #0d46a0;
            font-size: 1.25em;
            font-weight: bold;
            text-transform: uppercase;
            padding: 5px 10px;
            border-radius: 6px;
            cursor: pointer;
            text-decoration: none;
            margin: 10px;
        }

        .ajuste {
          position: absolute !important;
          top: 50% !important;
          transform: translate(-50%, -50%) !important;
          left: 50% !important;
        }

        .card {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            background-color: #0d46a0;
            text-align: center;
            color: #FFF;
            width: 90%;
            border-radius: 5px;
            box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
            padding: 10px;
            font-size: 1.25em;
            flex-wrap: wrap;
            margin: 10px;
            text-align: center !important;
            position: relative !important;
            width: 300px !important;
            height: 300px !important;
        }

        .cardIMG {
            height: 90px;
            width: 90px;
            border-radius: 5px;
        }

        @media (max-width: 900px) {
            .card {
                flex-direction: column;
            }
        }
    </style>
</head>

<body>
    <main class="conteudo">
        <h1 class="title">Alerta da coruja !</h1>
        <p class="sub">Aqui estão os itens que a coruja encontrou para você !</p>
        <div class="card" style="text-align: center;">
            <table class="ajuste">
              <tr>
              <td>
              <img class="cardIMG" src="${items[0].image}" alt="Foto do item"
              srcset="">
              </td>
              </tr>
              <tr>
              <td>
              <p>${items[0].title}</p>
              </td>
              </tr>
              <tr>
              <td>
              <h3>${items[0].priceID}:${items[0].price}</h3>
              </td>
              </tr>
              <tr>
              <td>
              <a class="cardA" href="${items[0].viewURL}">Ver</a>
              </td>
              </tr>
            </table>
        </div>

        <div class="card">
        <table class="ajuste">
        <tr>
        <td>
        <img class="cardIMG" src="${items[1].image}" alt="Foto do item"
        srcset="">
        </td>
        </tr>
        <tr>
        <td>
        <p>${items[1].title}</p>
        </td>
        </tr>
        <tr>
        <td>
        <h3>${items[1].priceID}:${items[1].price}</h3>
        </td>
        </tr>
        <tr>
        <td>
        <a class="cardA" href="${items[1].viewURL}">Ver</a>
        </td>
        </tr>
      </table>
        </div>

        <div class="card">
        <table class="ajuste">
        <tr>
        <td>
        <img class="cardIMG" src="${items[2].image}" alt="Foto do item"
        srcset="">
        </td>
        </tr>
        <tr>
        <td>
        <p>${items[2].title}</p>
        </td>
        </tr>
        <tr>
        <td>
        <h3>${items[2].priceID}:${items[2].price}</h3>
        </td>
        </tr>
        <tr>
        <td>
        <a class="cardA" href="${items[2].viewURL}">Ver</a>
        </td>
        </tr>
      </table>
        </div>
    </main>
</body>

</html>
`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      console.log('Email enviado: ' + info.response);
    }
  });
}

module.exports =  sendMail;