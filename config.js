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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_16_08_07_15_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDI1MixcbiAgICAgICAgNTQsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTcwLFxuICAgICAgICAyNDAsXG4gICAgICAgIDEzOSxcbiAgICAgICAgNTMsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTI0LFxuICAgICAgICAxODgsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjYsXG4gICAgICAgIDc0LFxuICAgICAgICA4MCxcbiAgICAgICAgMjQwLFxuICAgICAgICA3OCxcbiAgICAgICAgMTQwLFxuICAgICAgICAyOSxcbiAgICAgICAgMTMzLFxuICAgICAgICAxOSxcbiAgICAgICAgMjE2LFxuICAgICAgICAzNixcbiAgICAgICAgMTkwLFxuICAgICAgICAxMDIsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjEyLFxuICAgICAgICAxMTgsXG4gICAgICAgIDEwNyxcbiAgICAgICAgNTcsXG4gICAgICAgIDIxOSxcbiAgICAgICAgODVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzYsXG4gICAgICAgIDU4LFxuICAgICAgICAyMCxcbiAgICAgICAgMjIxLFxuICAgICAgICAyNTMsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjI3LFxuICAgICAgICAyMDcsXG4gICAgICAgIDY2LFxuICAgICAgICAyOCxcbiAgICAgICAgMzAsXG4gICAgICAgIDc1LFxuICAgICAgICA2NixcbiAgICAgICAgMzksXG4gICAgICAgIDQwLFxuICAgICAgICA2MyxcbiAgICAgICAgMTMzLFxuICAgICAgICAxMjYsXG4gICAgICAgIDE3NyxcbiAgICAgICAgODksXG4gICAgICAgIDExLFxuICAgICAgICAyMTAsXG4gICAgICAgIDQ5LFxuICAgICAgICAxNjUsXG4gICAgICAgIDEzMCxcbiAgICAgICAgNDcsXG4gICAgICAgIDE4NCxcbiAgICAgICAgNjksXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTI1LFxuICAgICAgICAyMCxcbiAgICAgICAgNzFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1MixcbiAgICAgICAgMTI4LFxuICAgICAgICAxNjUsXG4gICAgICAgIDAsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjM5LFxuICAgICAgICAxNCxcbiAgICAgICAgMTU3LFxuICAgICAgICAyMTUsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTgyLFxuICAgICAgICAxOTYsXG4gICAgICAgIDc3LFxuICAgICAgICAyNDIsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTU3LFxuICAgICAgICAxNTksXG4gICAgICAgIDcyLFxuICAgICAgICAyMzIsXG4gICAgICAgIDQ1LFxuICAgICAgICAxMzYsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTk3LFxuICAgICAgICAyMjcsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjU0LFxuICAgICAgICAxODUsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMixcbiAgICAgICAgMTYsXG4gICAgICAgIDU0LFxuICAgICAgICAxMTlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTcsXG4gICAgICAgIDE3MCxcbiAgICAgICAgOTEsXG4gICAgICAgIDU1LFxuICAgICAgICA5OSxcbiAgICAgICAgNixcbiAgICAgICAgNDcsXG4gICAgICAgIDc3LFxuICAgICAgICAxMDQsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjEsXG4gICAgICAgIDM3LFxuICAgICAgICAyNyxcbiAgICAgICAgMTA1LFxuICAgICAgICAyMzEsXG4gICAgICAgIDQ4LFxuICAgICAgICAyNDksXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTU3LFxuICAgICAgICAyNTAsXG4gICAgICAgIDIyMCxcbiAgICAgICAgOTQsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTkxLFxuICAgICAgICAzOSxcbiAgICAgICAgMjI3LFxuICAgICAgICAxMzIsXG4gICAgICAgIDk0LFxuICAgICAgICAxNyxcbiAgICAgICAgMTg1LFxuICAgICAgICA2NCxcbiAgICAgICAgMTE1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzYsXG4gICAgICAgIDY4LFxuICAgICAgICAxMDMsXG4gICAgICAgIDE2NCxcbiAgICAgICAgNDEsXG4gICAgICAgIDI2LFxuICAgICAgICAxNzgsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTkyLFxuICAgICAgICAyMzQsXG4gICAgICAgIDE4LFxuICAgICAgICAxNjAsXG4gICAgICAgIDU3LFxuICAgICAgICAxOTEsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTQyLFxuICAgICAgICA3NixcbiAgICAgICAgMTQsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTQ4LFxuICAgICAgICAxLFxuICAgICAgICAxNzIsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMzIsXG4gICAgICAgIDE2MCxcbiAgICAgICAgOTgsXG4gICAgICAgIDgsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTg1LFxuICAgICAgICA5NyxcbiAgICAgICAgMTA5LFxuICAgICAgICAxMDdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTEsXG4gICAgICAgIDQ4LFxuICAgICAgICAzOCxcbiAgICAgICAgMTk4LFxuICAgICAgICAyMzMsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjcsXG4gICAgICAgIDI0NixcbiAgICAgICAgNSxcbiAgICAgICAgMTEwLFxuICAgICAgICAxNTgsXG4gICAgICAgIDEwMixcbiAgICAgICAgODUsXG4gICAgICAgIDk1LFxuICAgICAgICAzMyxcbiAgICAgICAgMjU0LFxuICAgICAgICAyMCxcbiAgICAgICAgNjUsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTQyLFxuICAgICAgICAxLFxuICAgICAgICAyMTQsXG4gICAgICAgIDI4LFxuICAgICAgICA2NCxcbiAgICAgICAgMTk5LFxuICAgICAgICAyMDYsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjE0LFxuICAgICAgICAxMjYsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjQ0LFxuICAgICAgICA5OVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDExN1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICA1NixcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDEwN1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI1LFxuICAgICAgICAxNTksXG4gICAgICAgIDIyNixcbiAgICAgICAgMTI3LFxuICAgICAgICA5MixcbiAgICAgICAgMTc3LFxuICAgICAgICAyMjEsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTcwLFxuICAgICAgICA2MyxcbiAgICAgICAgMjMxLFxuICAgICAgICA4OCxcbiAgICAgICAgMTcsXG4gICAgICAgIDIyLFxuICAgICAgICAxNjEsXG4gICAgICAgIDYyLFxuICAgICAgICA2MSxcbiAgICAgICAgMjI4LFxuICAgICAgICAxMCxcbiAgICAgICAgMjUyLFxuICAgICAgICA1MixcbiAgICAgICAgMTQ0LFxuICAgICAgICAxOTgsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTY5LFxuICAgICAgICAxMjksXG4gICAgICAgIDE5NyxcbiAgICAgICAgMzAsXG4gICAgICAgIDY2LFxuICAgICAgICAyNTMsXG4gICAgICAgIDEzOCxcbiAgICAgICAgOTMsXG4gICAgICAgIDU1LFxuICAgICAgICAyLFxuICAgICAgICAxNzcsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMDksXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTkxLFxuICAgICAgICAxNDUsXG4gICAgICAgIDcxLFxuICAgICAgICA3MSxcbiAgICAgICAgOTIsXG4gICAgICAgIDg4LFxuICAgICAgICAyMjEsXG4gICAgICAgIDEyLFxuICAgICAgICA3NyxcbiAgICAgICAgMTU2LFxuICAgICAgICAxODYsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTgzLFxuICAgICAgICAxODEsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTEwLFxuICAgICAgICA1NSxcbiAgICAgICAgOCxcbiAgICAgICAgMTkxLFxuICAgICAgICA1LFxuICAgICAgICAyNDQsXG4gICAgICAgIDIzMSxcbiAgICAgICAgNDEsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTM1XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA2MyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJXMmJVcktMRmVNV3FTWlNubDVWenpSZU5HVGhEREx1a1AyTko4SmcxaWtzPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNDkxMzU1MjQ2NTNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkM4MDg1NDg1NjYwOUYxQkQ2QUY3OEJBMkJFNzAzRTAwXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMTA1OTczNVxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJJQzBpbzhMMlRMeUNCZk5vbWZXSkVnXCIsXG4gIFwicGhvbmVJZFwiOiBcImM2YzI2Zjk3LWRlZmUtNDE3YS1hODY5LThiYmRmMmQzZjYzMlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNjAsXG4gICAgICAxMTYsXG4gICAgICA2MSxcbiAgICAgIDE4MyxcbiAgICAgIDE5NyxcbiAgICAgIDQ2LFxuICAgICAgMzUsXG4gICAgICAyMTEsXG4gICAgICAyMzEsXG4gICAgICA3MyxcbiAgICAgIDE1NixcbiAgICAgIDc4LFxuICAgICAgMjMyLFxuICAgICAgMTE0LFxuICAgICAgODAsXG4gICAgICA2LFxuICAgICAgMTMzLFxuICAgICAgMjA2LFxuICAgICAgMjEzLFxuICAgICAgMTgzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDI1NSxcbiAgICAgIDM5LFxuICAgICAgNjIsXG4gICAgICAxNzYsXG4gICAgICAyMzQsXG4gICAgICAyMjUsXG4gICAgICAxNjMsXG4gICAgICAxMTQsXG4gICAgICAxOSxcbiAgICAgIDQxLFxuICAgICAgMTY4LFxuICAgICAgMTI4LFxuICAgICAgODQsXG4gICAgICAxMzQsXG4gICAgICAxNDEsXG4gICAgICAyMzgsXG4gICAgICA0MCxcbiAgICAgIDY5LFxuICAgICAgMTIyLFxuICAgICAgNzlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiNzIxMTlKSlBcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDkxMzU1MjQ2NTM6NkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTIwMzYyNTQ5Mzg3MzQ1OjZAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSUxEaFlRR0VJNlQxYlFHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJ5cmJBYlhvd29uSlRpNWtrRG9sVmhDNDh6c3VhWVVMdE5QTCtTdWxLTTFvPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImhCTUR1T295dkpjbzhmRlRBRmJPS2RrNlJFbVF1ZVhJai9WaDR2d0pwcE1SdDlFcFNFL0VGcmEwLzRicVFmSitKclEyTmtNZGdFdjk3K2FBM1oxc0JnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIndSa0ROU2J1OVJXTkw2enhIWFI5TlZSaGxCVFYraVdOakRqVWhuZEw0OGZoM240citJaXpYNDlFcEY5QkNGN1oxcVVFQk96ZHlGemVHMnh5R01ieGpnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDkxMzU1MjQ2NTM6NkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDkwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjEwNTk3Mjlcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


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
