const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349135524653";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_16_13_06_23_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMCxcbiAgICAgICAgMjU1LFxuICAgICAgICAzOSxcbiAgICAgICAgMjMsXG4gICAgICAgIDYzLFxuICAgICAgICAyNTAsXG4gICAgICAgIDE2LFxuICAgICAgICAxMzYsXG4gICAgICAgIDU3LFxuICAgICAgICAyMDYsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTY0LFxuICAgICAgICAxNjUsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTc2LFxuICAgICAgICAyMzMsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTcyLFxuICAgICAgICAyNTUsXG4gICAgICAgIDUzLFxuICAgICAgICA3MyxcbiAgICAgICAgMjUsXG4gICAgICAgIDIxMCxcbiAgICAgICAgNzYsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTg2LFxuICAgICAgICAxNixcbiAgICAgICAgMTMxLFxuICAgICAgICAzLFxuICAgICAgICAyMDEsXG4gICAgICAgIDY3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI1MSxcbiAgICAgICAgOTMsXG4gICAgICAgIDkxLFxuICAgICAgICA4MSxcbiAgICAgICAgMjE0LFxuICAgICAgICAzMyxcbiAgICAgICAgOTQsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTk5LFxuICAgICAgICA1NCxcbiAgICAgICAgMTEzLFxuICAgICAgICAxMjYsXG4gICAgICAgIDg0LFxuICAgICAgICA1OCxcbiAgICAgICAgMjU0LFxuICAgICAgICAxOTIsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTM1LFxuICAgICAgICAxOTksXG4gICAgICAgIDM2LFxuICAgICAgICAyNTUsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjAzLFxuICAgICAgICAxMTcsXG4gICAgICAgIDc0LFxuICAgICAgICA3NixcbiAgICAgICAgNjIsXG4gICAgICAgIDk2LFxuICAgICAgICA0OSxcbiAgICAgICAgMTkyLFxuICAgICAgICAxNjIsXG4gICAgICAgIDExMlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDIwLFxuICAgICAgICAxOTgsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMCxcbiAgICAgICAgNzQsXG4gICAgICAgIDEwLFxuICAgICAgICAxNzEsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTc3LFxuICAgICAgICA1NyxcbiAgICAgICAgMTAxLFxuICAgICAgICA1MCxcbiAgICAgICAgMjMzLFxuICAgICAgICA3NCxcbiAgICAgICAgOTksXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTM4LFxuICAgICAgICAxNTcsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMTQsXG4gICAgICAgIDEzLFxuICAgICAgICA1MSxcbiAgICAgICAgMTc5LFxuICAgICAgICAwLFxuICAgICAgICA3NCxcbiAgICAgICAgMTEzLFxuICAgICAgICAxNzYsXG4gICAgICAgIDI2LFxuICAgICAgICAxMzEsXG4gICAgICAgIDEwOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODcsXG4gICAgICAgIDEyNixcbiAgICAgICAgOTAsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjQ3LFxuICAgICAgICA3MCxcbiAgICAgICAgMjI4LFxuICAgICAgICAyNDgsXG4gICAgICAgIDQ1LFxuICAgICAgICAxOTYsXG4gICAgICAgIDg2LFxuICAgICAgICA3OCxcbiAgICAgICAgMjM5LFxuICAgICAgICAyMzQsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTI5LFxuICAgICAgICA2MixcbiAgICAgICAgMTUxLFxuICAgICAgICAxMzYsXG4gICAgICAgIDUsXG4gICAgICAgIDQwLFxuICAgICAgICAxOCxcbiAgICAgICAgMjQsXG4gICAgICAgIDQsXG4gICAgICAgIDc2LFxuICAgICAgICAxNzgsXG4gICAgICAgIDIwLFxuICAgICAgICA4MyxcbiAgICAgICAgODUsXG4gICAgICAgIDkzLFxuICAgICAgICAxNjcsXG4gICAgICAgIDEyNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgNDUsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjQxLFxuICAgICAgICA4NCxcbiAgICAgICAgNzgsXG4gICAgICAgIDMwLFxuICAgICAgICAxMjMsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjU1LFxuICAgICAgICAyMDUsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjI0LFxuICAgICAgICA3NSxcbiAgICAgICAgOTMsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTE0LFxuICAgICAgICAxNSxcbiAgICAgICAgMjE5LFxuICAgICAgICAxOCxcbiAgICAgICAgNDgsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTU4LFxuICAgICAgICAxNTMsXG4gICAgICAgIDIwLFxuICAgICAgICAyMjksXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMDEsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTIzLFxuICAgICAgICA4OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNTIsXG4gICAgICAgIDUyLFxuICAgICAgICAxNTEsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTIyLFxuICAgICAgICA5NCxcbiAgICAgICAgMTEsXG4gICAgICAgIDUsXG4gICAgICAgIDEyLFxuICAgICAgICAyMDEsXG4gICAgICAgIDQsXG4gICAgICAgIDExLFxuICAgICAgICAxNzYsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTUyLFxuICAgICAgICAxMCxcbiAgICAgICAgMjE3LFxuICAgICAgICAyMzMsXG4gICAgICAgIDY1LFxuICAgICAgICA1MSxcbiAgICAgICAgMjI2LFxuICAgICAgICAyMDAsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjA2LFxuICAgICAgICAxODgsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTU4LFxuICAgICAgICAyNDYsXG4gICAgICAgIDIwNCxcbiAgICAgICAgOTksXG4gICAgICAgIDE0NixcbiAgICAgICAgOTJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAzNixcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxMjdcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAyOFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTE0LFxuICAgICAgICAxNTYsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTQsXG4gICAgICAgIDkzLFxuICAgICAgICAxNDYsXG4gICAgICAgIDY4LFxuICAgICAgICAxNDUsXG4gICAgICAgIDM5LFxuICAgICAgICAxMzUsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjQyLFxuICAgICAgICA3NSxcbiAgICAgICAgMjUyLFxuICAgICAgICAxNTAsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTc4LFxuICAgICAgICAxNjcsXG4gICAgICAgIDQ2LFxuICAgICAgICA2MyxcbiAgICAgICAgMjEyLFxuICAgICAgICAxNTksXG4gICAgICAgIDIyMyxcbiAgICAgICAgODksXG4gICAgICAgIDM5LFxuICAgICAgICAxMzMsXG4gICAgICAgIDY4LFxuICAgICAgICA1NyxcbiAgICAgICAgMTEzLFxuICAgICAgICA5MCxcbiAgICAgICAgODEsXG4gICAgICAgIDgyLFxuICAgICAgICAyNyxcbiAgICAgICAgMjI3LFxuICAgICAgICAyMDcsXG4gICAgICAgIDE4OCxcbiAgICAgICAgNTEsXG4gICAgICAgIDI0NyxcbiAgICAgICAgODcsXG4gICAgICAgIDE3MSxcbiAgICAgICAgOCxcbiAgICAgICAgMTkwLFxuICAgICAgICAxNjMsXG4gICAgICAgIDE1LFxuICAgICAgICAxNzYsXG4gICAgICAgIDI0LFxuICAgICAgICAxMDAsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjQsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTYsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjUyLFxuICAgICAgICAxLFxuICAgICAgICAzMyxcbiAgICAgICAgMTkyLFxuICAgICAgICAxMTIsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjQxLFxuICAgICAgICAyMDUsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTExLFxuICAgICAgICAxNDNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIyMSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJDVjVIdm9rTFU1anJsVDJOeG8yeXhFaE1QOFBQVGFBZHRZOEI4bmlnTVpZPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJMY2FBSEdHZlFqLUV2em9Ba18wMDFRXCIsXG4gIFwicGhvbmVJZFwiOiBcIjM5YTQ1YTc0LThlZmMtNGE4NC1hOTA0LWIxYjZhNWFiNDNlYVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA2OCxcbiAgICAgIDEzNyxcbiAgICAgIDIwOSxcbiAgICAgIDEyMSxcbiAgICAgIDEyMCxcbiAgICAgIDI4LFxuICAgICAgOTYsXG4gICAgICA2OSxcbiAgICAgIDIzNixcbiAgICAgIDI0MCxcbiAgICAgIDcxLFxuICAgICAgMTgwLFxuICAgICAgMTk4LFxuICAgICAgMTc3LFxuICAgICAgOCxcbiAgICAgIDE3NSxcbiAgICAgIDg2LFxuICAgICAgMTY2LFxuICAgICAgMTI0LFxuICAgICAgMTU1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogZmFsc2UsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNDgsXG4gICAgICAxNzIsXG4gICAgICAxNDYsXG4gICAgICAyNDIsXG4gICAgICAxOTYsXG4gICAgICAxMTksXG4gICAgICAyNSxcbiAgICAgIDExMixcbiAgICAgIDg5LFxuICAgICAgMTI5LFxuICAgICAgNDEsXG4gICAgICA1MixcbiAgICAgIDQxLFxuICAgICAgNzMsXG4gICAgICA5NCxcbiAgICAgIDE0NixcbiAgICAgIDY2LFxuICAgICAgODUsXG4gICAgICA2MyxcbiAgICAgIDI1MFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0tPR2cxMFFocFBoc3dZWUFTQUFLQUE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwibDh5dEI3QUY2N2Uwd0REeEZ3VXQ5akMyQjRYVldIWWNDWUhWWTdrMlpuaz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCI4ejBmU1hRRjNpOHRRczdoS2VxVldWYmEydnkyZTBhVGZ1eEswVld3SmJDSlNhMXhsYjBXL3hHc3psWk1VOFFjN2U1d1JId085dG1KcW1KcTFmY1FDZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJDMVhQZFc0dXZmb25IU1VsRGN6bzZET1lsS2xaK3RqNlo4WnU2L0c4TVpXUzRPRERKSWFScTduODNEdUI3YjNaaE91L0tPSzhETzNPd2NTSHVweUNnZz09XCJcbiAgfSxcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDkxMzU1MjQ2NTM6NUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTIwMzYyNTQ5Mzg3MzQ1OjVAbGlkXCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ5MTM1NTI0NjUzOjVAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgNSxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMTIxXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTkxNTkxNzhcbn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
