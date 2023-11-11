var nodemailer = require("nodemailer")
const http = require("http")
const db = require("../util/database")
const axios = require("axios")

process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0"

var transporter = nodemailer.createTransport({
  host: "mail.cat2020.org",
  port: 465,
  secure: true, // use SSL
  auth: {
    user: "webportal@cat2020.org",
    pass: "webportal@2020"
  }
})

const message = "Welcome to MCK : "

exports.emailSend = (param) => {
  try {
    let mailOptions = ""
    if (param.html) {
      mailOptions = {
        from: "webportal@cat2020.org",
        to: param.to,
        subject: param.subject,
        text: param.message,
        html: `${param.html}`
      }
    } else {
      mailOptions = {
        from: "webportal@cat2020.org",
        to: param.to,
        subject: param.subject,
        text: param.message
      }
    }
    // console.log(param);
    transporter.sendMail(
      mailOptions,
      function (error, info) {
        if (error) {
          console.log(error)
        } else {
          console.log("Email sent: " + info.response)
        }
      }
    )
    message.replace(" ", "+")
  } catch (error) {
    console.log(error)
  }
}

exports.SendlkSmsSend = (parm) => {
  let send = {
    username: "esmsusr_14ju",
    password: "Nath123*",
    from: "NathPS",
    to: parm.to,
    text: parm.mg,
    mesageType: 1
  }

  axios.post("http://smeapps.mobitel.lk:8585/EnterpriseSMSV3/esmsproxyURL.php", send)
       .then(res => {
         console.log(`statusCode: ${res[0]}`)
         // console.log(res)
       })
       .catch(error => {
         console.error(error)
       })
}

exports.SendlkSmsSend = (parm) => {
const apiUrl = 'https://sms.send.lk/api/v3/sms/send'; // Replace with the actual SMS endpoint
const sender_id= 'CAT20';
const accessToken = '1478|JDRl8GQ6ac7a0cmafiNjo0Gzt674AR3QN8bOOzVP'; // Replace with your actual Bearer token

const smsData = {
  recipient: parm.to, // Replace with the recipient's phone number
  sender_id:sender_id,
  message: parm.mg, // Replace with your SMS message
};

axios.post(apiUrl, smsData, {
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${accessToken}`,
  },
})
  .then(response => {
    console.log('SMS sent successfully:', response.data);
  })
  .catch(error => {
    console.error('Error sending SMS:', error.message);
  });
}

exports.testSmsSend = (parm) => {
  let send = {
    user: "E00004",
    password: "Kps@1234",
    src: "kurnegalaPS",
    dst: parm.to,
    text: parm.mg,
    mesageType: 1
  }
  axios.post("https://smsc.slt.lk:8093/api/sms", send)
       .then(res => {
         console.log(`statusCode: ${res[0]}`)
       })
       .catch(error => {
         console.error(error)
       })
}

exports.smsSend = (param) => {
  var id = ""
  var pword = ""
  var link = ""
  db.execute(
    "SELECT sms_getting_setting.sms_setting_id,sms_getting_setting.sms_gatway_id," +
    "sms_getting_setting.sms_gatway_pwd,sms_getting_setting.sms_gatway_link " +
    "FROM sms_getting_setting",
    (er, ro, fd) => {
      if (!er) {
        id = ro[0].sms_gatway_id
        pword = ro[0].sms_gatway_pwd
        link = ro[0].sms_gatway_link
        console.log("sms send call")
        console.log(param)
        let message = param.message
        let mobile = param.mob
        http.get(
          "" + link + "id=" + id + "&password=" + pword + "&text=" +
          message + "&to=" + mobile + "&from=PS.Kurunegala",
          function (err, res, body) {
            if (err) {
              console.log("eroor on")
              console.log(err)
            } else {
              console.log("Else")
              console.log(res)
            }
          })
      }
    })
}
