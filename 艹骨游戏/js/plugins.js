// Generated by RPG Maker.
// Do not edit this file directly.
var $plugins =
[
{"name":"YEP_CoreEngine","status":true,"description":"v1.25 Needed for the majority of Yanfly Engine Scripts. Also\r\ncontains bug fixes found inherently in RPG Maker.","parameters":{"---Screen---":"","Screen Width":"1334","Screen Height":"750","Scale Battlebacks":"true","Scale Title":"true","Scale Game Over":"true","Open Console":"false","Reposition Battlers":"true","GameFont Load Timer":"0","Update Real Scale":"false","Collection Clear":"true","---Gold---":"","Gold Max":"99999999","Gold Font Size":"20","Gold Icon":"313","Gold Overlap":"A lotta","---Items---":"","Default Max":"99","Quantity Text Size":"20","---Parameters---":"","Max Level":"99","Actor MaxHP":"9999","Actor MaxMP":"9999","Actor Parameter":"999","Enemy MaxHP":"999999","Enemy MaxMP":"9999","Enemy Parameter":"999","---Battle---":"","Animation Rate":"4","Flash Target":"false","Show Events Transition":"true","Show Events Snapshot":"true","---Font---":"","Chinese Font":"SimHei, Heiti TC, sans-serif","Korean Font":"Dotum, AppleGothic, sans-serif","Default Font":"GameFont, Verdana, Arial, Courier New","Font Size":"28","Text Align":"left","---Windows---":"","Digit Grouping":"true","Line Height":"36","Icon Width":"32","Icon Height":"32","Face Width":"144","Face Height":"144","Window Padding":"18","Text Padding":"6","Window Opacity":"192","Gauge Outline":"true","Gauge Height":"18","Menu TP Bar":"true","---Window Colors---":"","Color: Normal":"0","Color: System":"16","Color: Crisis":"17","Color: Death":"18","Color: Gauge Back":"19","Color: HP Gauge 1":"20","Color: HP Gauge 2":"21","Color: MP Gauge 1":"22","Color: MP Gauge 2":"23","Color: MP Cost":"23","Color: Power Up":"24","Color: Power Down":"25","Color: TP Gauge 1":"28","Color: TP Gauge 2":"29","Color: TP Cost Color":"29"}},
{"name":"YEP_BattleEngineCore","status":true,"description":"v1.45 Have more control over the flow of the battle system\nwith this plugin and alter various aspects to your liking.","parameters":{"---General---":"","Action Speed":"agi","Default System":"dtb","---Escape---":"","Escape Ratio":"0.5 * $gameParty.agility() / $gameTroop.agility()","Fail Escape Boost":"0.10","---Animation---":"","Animation Base Delay":"0","Animation Next Delay":"0","Certain Hit Animation":"0","Physical Animation":"52","Magical Animation":"51","Enemy Attack Animation":"39","Reflect Animation":"42","Motion Waiting":"false","---Frontview---":"","Front Position X":"Graphics.boxWidth / 8 + Graphics.boxWidth / 4 * index","Front Position Y":"Graphics.boxHeight - 180","Front Actor Sprite":"false","Front Sprite Priority":"1","---Sideview---":"","Home Position X":"screenWidth - 16 - (maxSize + 2) * 32 + index * 32","Home Position Y":"screenHeight - statusHeight - maxSize * 48 + (index+1) * 48 - 32","Side Sprite Priority":"1","---Sprites---":"","Default X Anchor":"0.50","Default Y Anchor":"1.00","Step Distance":"48","Flinch Distance":"12","Show Shadows":"true","---Damage Popups---":"","Popup Duration":"128","Newest Popup Bottom":"true","Popup Overlap Rate":"0.9","Critical Popup":"255, 0, 0, 160","Critical Duration":"60","---Tick-Settings---":"","Timed States":"false","Timed Buffs":"false","Turn Time":"100","AI Self Turns":"true","---Window Settings---":"","Lower Windows":"true","Window Rows":"4","Command Window Rows":"4","Command Alignment":"center","Start Actor Command":"true","Current Max":"false","---Selection Help---":"","Mouse Over":"true","Select Help Window":"true","User Help Text":"玩家","Ally Help Text":"友方","Allies Help Text":"友方","Enemy Help Text":"敌方","Enemies Help Text":"敌方","All Help Text":"全体 %1","Random Help Text":"%2 个随机 %1","---Enemy Select---":"","Visual Enemy Select":"true","Show Enemy Name":"true","Show Select Box":"false","Enemy Font Size":"20","Enemy Auto Select":"this.furthestRight()","---Actor Select---":"","Visual Actor Select":"true","---Battle Log---":"","Show Emerge Text":"false","Show Pre-Emptive Text":"true","Show Surprise Text":"true","Optimize Speed":"true","Show Action Text":"false","Show State Text":"false","Show Buff Text":"false","Show Counter Text":"true","Show Reflect Text":"true","Show Substitute Text":"true","Show Fail Text":"false","Show Critical Text":"false","Show Miss Text":"false","Show Evasion Text":"false","Show HP Text":"false","Show MP Text":"false","Show TP Text":"false"}},
{"name":"YEP_EquipCore","status":true,"description":"v1.17 Allows for the equipment system to be more flexible to\nallow for unique equipment slots per class.","parameters":{"---General---":"","Text Align":"center","Finish Command":"退出","Remove Text":"脱下","Remove Icon":"16","Empty Text":"<无>","Empty Icon":"16","---Rules---":"","Non-Removable Types":"1","Non-Optimized Types":"5"}},
{"name":"YEP_ItemCore","status":true,"description":"v1.28 Changes the way Items are handled for your game\nand the Item Scene, too.","parameters":{"---General---":"","Max Items":"0","Max Weapons":"100","Max Armors":"100","Starting ID":"3000","Random Variance":"0","Negative Variance":"false","Name Format":"%1%2%3%4","Name Spacing":"true","Boost Format":"(+%1)","---Item Scene---":"","Updated Scene Item":"true","List Equipped Items":"true","Show Icon":"true","Icon Size":"128","Font Size":"20","Command Alignment":"center","Recovery Format":"%1 Heal","Add State":"获得状态","Add Buff":"获得buff","Remove State":"失去状态","Remove Buff":"失去buff","Maximum Icons":"4","Use Command":"使用了 %1","Carry Format":"%1/%2","--Independent Items--":"","Midgame Note Parsing":"false"}},
{"name":"YEP_MessageCore","status":true,"description":"v1.19 Adds more features to the Message Window to customized\nthe way your messages appear and functions.","parameters":{"---General---":"","Default Rows":"4","Default Width":"Graphics.boxWidth","Face Indent":"Window_Base._faceWidth + 24","Fast Forward Key":"pagedown","Enable Fast Forward":"true","Word Wrapping":"false","Description Wrap":"false","Word Wrap Space":"false","Tight Wrap":"false","---Font---":"","Font Name":"GameFont","Font Name CH":"SimHei, Heiti TC, sans-serif","Font Name KR":"Dotum, AppleGothic, sans-serif","Font Size":"28","Font Size Change":"12","Font Changed Max":"96","Font Changed Min":"12","Font Outline":"4","Maintain Font":"false","---Name Box---":"","Name Box Buffer X":"-28","Name Box Buffer Y":"0","Name Box Padding":"this.standardPadding() * 4","Name Box Color":"0","Name Box Clear":"false","Name Box Added Text":"\\c[6]","Name Box Auto Close":"false"}},
{"name":"YEP_MoveRouteCore","status":true,"description":"v1.02 Expand the number of movement options for the move\nroute events using this plugin.","parameters":{}},
{"name":"YEP_QuestJournal","status":true,"description":"v1.00 Insert a quest journal system into your game!","parameters":{"---Main Menu---":"","Quest Command":"笔记本","Show Command":"true","Enable Command":"true","Auto Place Command":"true","---Quest Menu---":"","Quest Category Window":"{\"---Categories---\":\"\",\"Category Order\":\"[\\\"available\\\",\\\"completed\\\"]\",\"Available Text\":\"\\\\i[192]当前线索 (%1)\",\"Completed Text\":\"\\\\i[191]过往记录 (%1)\",\"Failed Text\":\"\\\\i[194]作废线索 (%1)\",\"All Text\":\"\\\\i[189]全部剧情 (%1)\",\"Cancel Text\":\"\\\\i[161]关闭\",\"---Window Settings---\":\"\",\"X\":\"0\",\"Y\":\"0\",\"Width\":\"Graphics.boxWidth / 3\",\"Height\":\"this.fittingHeight(this.numVisibleRows())\",\"Rows\":\"4\",\"Columns\":\"1\",\"Line Height\":\"36\",\"Font Face\":\"GameFont\",\"Font Size\":\"28\",\"Standard Padding\":\"18\",\"Text Padding\":\"6\",\"Text Alignment\":\"left\",\"Standard Opacity\":\"255\",\"Back Opacity\":\"192\",\"Window Skin\":\"Window\"}","Quest List Window":"{\"---Types---\":\"\",\"Show Types\":\"true\",\"Type Order\":\"[\\\"\\\\\\\\c[6]主线剧情\\\",\\\"\\\\\\\\c[4]支线剧情\\\",\\\"\\\\\\\\c[3]角色剧情\\\"]\",\"List Open Symbol\":\"-\",\"List Closed Symbol\":\"+\",\"Type Text Format\":\"%1%2 (%3)\",\"Quest Indent\":\"0\",\"Show Empty\":\"false\",\"Read Quest\":\"\\\\i[121]查看\",\"Cancel\":\"\\\\i[16]取消\",\"---Window Settings---\":\"\",\"X\":\"0\",\"Y\":\"Graphics.boxHeight - height\",\"Width\":\"Graphics.boxWidth / 3\",\"Height\":\"Graphics.boxHeight - this.fittingHeight(4)\",\"Line Height\":\"36\",\"Font Face\":\"GameFont\",\"Font Size\":\"28\",\"Standard Padding\":\"18\",\"Text Padding\":\"6\",\"Standard Opacity\":\"255\",\"Back Opacity\":\"192\",\"Type Alignment\":\"left\",\"Quest Alignment\":\"left\",\"Window Skin\":\"Window\"}","Quest Title Window":"{\"---Window Settings---\":\"\",\"No Quest Title\":\"\\\\c[4]笔记本\",\"X\":\"Graphics.boxWidth - width\",\"Y\":\"0\",\"Width\":\"Graphics.boxWidth * 2 / 3\",\"Height\":\"this.fittingHeight(1)\",\"Line Height\":\"36\",\"Font Face\":\"GameFont\",\"Font Size\":\"28\",\"Standard Padding\":\"18\",\"Text Padding\":\"6\",\"Text Alignment\":\"center\",\"Standard Opacity\":\"255\",\"Back Opacity\":\"192\",\"Window Skin\":\"Window\"}","Quest Data Window":"{\"---Data Settings---\":\"\",\"No Data Text\":\"\\\"这是你的\\\\\\\\c[4]笔记本\\\\\\\\c[0]。\\\\n\\\\n你可以在这里回顾所有关于这个世界的已知信息。\\\"\",\"Quest Data Format\":\"\\\"<br>%5\\\"\",\"Uncleared Objective\":\"\\\\i[160]%1\",\"Completed Objective\":\"\\\\i[165]%1\",\"Failed Objective\":\"\\\\i[162]%1\",\"Unclaimed Reward\":\"\\\\i[160]%1\",\"Claimed Reward\":\"\\\\i[163]%1\",\"Denied Reward\":\"\\\\i[161]%1\",\"Load Delay\":\"30\",\"---Window Settings---\":\"\",\"X\":\"Graphics.boxWidth - width\",\"Y\":\"Graphics.boxHeight - height\",\"Width\":\"Graphics.boxWidth * 2 / 3\",\"Height\":\"Graphics.boxHeight - this.fittingHeight(1)\",\"Line Height\":\"36\",\"Font Face\":\"GameFont\",\"Font Size\":\"28\",\"Standard Padding\":\"18\",\"Text Padding\":\"6\",\"Standard Opacity\":\"255\",\"Back Opacity\":\"192\",\"Window Skin\":\"Window\",\"Scroll Speed\":\"4\"}","Lunatic Mode":"{\"---Quest Menu---\":\"\",\"Before Create Windows\":\"\\\"// Variables\\\\n//   background - background image used for the menu\\\\n//   windowLayer - sprite layer that contains all windows\\\\n//\\\\n// background.bitmap = ImageManager.loadTitle1(\\\\\\\"Book\\\\\\\");\\\\n// this.fitScreen(background);\\\"\",\"After Create Windows\":\"\\\"// Variables\\\\n//   background - background image used for the menu\\\\n//   windowLayer - sprite layer that contains all windows\\\"\",\"Close Quest Menu\":\"\\\"// Variables\\\\n//   background - background image used for the menu\\\\n//   windowLayer - sprite layer that contains all windows\\\"\",\"---Quest Status---\":\"\",\"Quest Add\":\"\\\"// Variables:\\\\n//   questId - ID of the quest being added\\\\n//\\\\n// console.log('Quest ' + questId + ' successfully added!')\\\"\",\"Quest Remove\":\"\\\"// Variables:\\\\n//   questId - ID of the quest being removed\\\\n//\\\\n// console.log('Quest ' + questId + ' successfully removed!')\\\"\",\"Quest Complete\":\"\\\"// Variables:\\\\n//   questId - ID of the quest set to completed\\\\n//\\\\n// console.log('Quest ' + questId + ' status changed to Completed!')\\\"\",\"Quest Fail\":\"\\\"// Variables:\\\\n//   questId - ID of the quest set to failed\\\\n//\\\\n// console.log('Quest ' + questId + ' status changed to Failed!')\\\"\",\"Quest Available\":\"\\\"// Variables:\\\\n//   questId - ID of the quest set to available\\\\n//\\\\n// console.log('Quest ' + questId + ' status changed to Available!')\\\"\",\"---Description---\":\"\",\"Change Description\":\"\\\"// Variables:\\\\n//   questId - ID of the quest whose description is changed\\\\n//   index - Description index being changed to\\\\n//\\\\n// console.log('Quest ' + questId + ' description index changed to ' + index)\\\"\",\"---Objectives---\":\"\",\"Show Objective\":\"\\\"// Variables:\\\\n//   questId - ID of the quest whose objectives are altered\\\\n//   objectiveId - ID of the objective being shown\\\\n//\\\\n// console.log('Quest ' + questId + ' objective ' + objectiveId + ' changed to shown!')\\\"\",\"Hide Objective\":\"\\\"// Variables:\\\\n//   questId - ID of the quest whose objectives are altered\\\\n//   objectiveId - ID of the objective being hidden\\\\n//\\\\n// console.log('Quest ' + questId + ' objective ' + objectiveId + ' changed to hidden!')\\\"\",\"Complete Objective\":\"\\\"// Variables:\\\\n//   questId - ID of the quest whose objectives are altered\\\\n//   objectiveId - ID of the objective being completed\\\\n//\\\\n// console.log('Quest ' + questId + ' objective ' + objectiveId + ' changed to completed!')\\\"\",\"Fail Objective\":\"\\\"// Variables:\\\\n//   questId - ID of the quest whose objectives are altered\\\\n//   objectiveId - ID of the objective having failed\\\\n//\\\\n// console.log('Quest ' + questId + ' objective ' + objectiveId + ' changed to failed!')\\\"\",\"Normalize Objective\":\"\\\"// Variables:\\\\n//   questId - ID of the quest whose objectives are altered\\\\n//   objectiveId - ID of the objective normalized\\\\n//\\\\n// console.log('Quest ' + questId + ' objective ' + objectiveId + ' changed to normal!')\\\"\",\"---Rewards---\":\"\",\"Show Reward\":\"\\\"// Variables:\\\\n//   questId - ID of the quest whose rewards are altered\\\\n//   rewardId - ID of the reward being shown\\\\n//\\\\n// console.log('Quest ' + questId + ' reward ' + rewardId + ' becomes shown!')\\\"\",\"Hide Reward\":\"\\\"// Variables:\\\\n//   questId - ID of the quest whose rewards are altered\\\\n//   rewardId - ID of the reward being hidden\\\\n//\\\\n// console.log('Quest ' + questId + ' reward ' + rewardId + ' becomes hidden!')\\\"\",\"Claim Reward\":\"\\\"// Variables:\\\\n//   questId - ID of the quest whose rewards are altered\\\\n//   rewardId - ID of the reward becoming claimed\\\\n//\\\\n// console.log('Quest ' + questId + ' reward ' + rewardId + ' is now claimed!')\\\"\",\"Deny Reward\":\"\\\"// Variables:\\\\n//   questId - ID of the quest whose rewards are altered\\\\n//   rewardId - ID of the reward becoming denied\\\\n//\\\\n// console.log('Quest ' + questId + ' reward ' + rewardId + ' is now denied!')\\\"\",\"Normalize Reward\":\"\\\"// Variables:\\\\n//   questId - ID of the quest whose rewards are altered\\\\n//   rewardId - ID of the reward normalized\\\\n//\\\\n// console.log('Quest ' + questId + ' reward ' + rewardId + ' is normalized!')\\\"\",\"---Subtext---\":\"\",\"Change Subtext\":\"\\\"// Variables:\\\\n//   questId - ID of the quest whose subtext is changed\\\\n//   index - Subtext index being changed to\\\\n//\\\\n// console.log('Quest ' + questId + ' subtext index changed to ' + index)\\\"\"}","---Quest List---":"","Quest 1":"{\"Title\":\"\\\\i[87]突然醒来\",\"Type\":\"主线剧情\",\"Difficulty\":\"Easy Peasy\",\"From\":\"NPC Name\",\"Location\":\"Location Name\",\"Description\":\"[\\\"\\\\\\\"你明明记得自己死于一场车祸，却又在一座墓园里醒了过来。\\\\\\\"\\\",\\\"\\\\\\\"你明明记得自己死于一场车祸，却又在一座墓园里醒了过来。\\\\\\\\n\\\\\\\\n阅读过路牌之后，你知道了这里离你家所在的红石镇不远。\\\\\\\"\\\",\\\"\\\\\\\"你明明记得自己死于一场车祸，却又在一座墓园里醒了过来。\\\\\\\\n\\\\\\\\n阅读过路牌之后，你知道了这里离你家所在的红石镇不远。\\\\\\\\n\\\\\\\\n你很快就引起了路人的注意。由于衣衫褴褛、面色惨白，所以\\\\\\\\n被当成了流浪汉。\\\\\\\"\\\",\\\"\\\\\\\"你明明记得自己死于一场车祸，却又在一座墓园里醒了过来。\\\\\\\\n\\\\\\\\n阅读过路牌之后，你知道了这里离你家所在的红石镇不远。\\\\\\\\n\\\\\\\\n你很快就引起了路人的注意。由于衣衫褴褛、面色惨白，所以\\\\\\\\n被当成了流浪汉。\\\\\\\\n\\\\\\\\n好不容易找到了自己的家，你却发现房子已经被拆掉了。\\\\\\\\n也许你的家人在你死后就搬走了，根本无从寻找。\\\\\\\"\\\"]\",\"Objectives List\":\"[\\\"\\\\\\\"\\\\\\\\\\\\\\\\c[4]First\\\\\\\\\\\\\\\\c[0] objective to be cleared.\\\\\\\"\\\",\\\"\\\\\\\"\\\\\\\\\\\\\\\\c[4]Second\\\\\\\\\\\\\\\\c[0] objective, but it's hidden.\\\\\\\"\\\",\\\"\\\\\\\"To make other objectives appear,\\\\\\\\nenable them through the \\\\\\\\\\\\\\\\c[4]'Visible\\\\\\\\nObjectives'\\\\\\\\\\\\\\\\c[0] plugin parameter or by\\\\\\\\nusing a plugin command to make\\\\\\\\nthem appear\\\\\\\"\\\"]\",\"Visible Objectives\":\"[\\\"1\\\"]\",\"Rewards List\":\"[\\\"\\\\\\\"\\\\\\\\\\\\\\\\i[176]Potion x5\\\\\\\"\\\",\\\"\\\\\\\"\\\\\\\\\\\\\\\\i[178]Ether x3\\\\\\\"\\\",\\\"\\\\\\\"To make other rewards appear,\\\\\\\\nenable them through the \\\\\\\\\\\\\\\\c[4]'Visible\\\\\\\\nRewards'\\\\\\\\\\\\\\\\c[0] plugin parameter or by\\\\\\\\nusing a plugin command to make\\\\\\\\nthem appear\\\\\\\"\\\"]\",\"Visible Rewards\":\"[\\\"1\\\"]\",\"Subtext\":\"[\\\"\\\\\\\"\\\\\\\"\\\",\\\"\\\\\\\"This is a subtext. It is used as\\\\\\\\nextra text that you may want to\\\\\\\\nplace on your quest journal that\\\\\\\\ndiffers from the description.\\\\\\\"\\\"]\"}","Quest 2":"","Quest 3":"","Quest 4":"","Quest 5":"","Quest 6":"","Quest 7":"","Quest 8":"","Quest 9":"","Quest 10":"","Quest 11":"","Quest 12":"","Quest 13":"","Quest 14":"","Quest 15":"","Quest 16":"","Quest 17":"","Quest 18":"","Quest 19":"","Quest 20":"","Quest 21":"","Quest 22":"","Quest 23":"","Quest 24":"","Quest 25":"","Quest 26":"","Quest 27":"","Quest 28":"","Quest 29":"","Quest 30":"","Quest 31":"","Quest 32":"","Quest 33":"","Quest 34":"","Quest 35":"","Quest 36":"","Quest 37":"","Quest 38":"","Quest 39":"","Quest 40":"","Quest 41":"","Quest 42":"","Quest 43":"","Quest 44":"","Quest 45":"","Quest 46":"","Quest 47":"","Quest 48":"","Quest 49":"","Quest 50":"","Quest 51":"","Quest 52":"","Quest 53":"","Quest 54":"","Quest 55":"","Quest 56":"","Quest 57":"","Quest 58":"","Quest 59":"","Quest 60":"","Quest 61":"","Quest 62":"","Quest 63":"","Quest 64":"","Quest 65":"","Quest 66":"","Quest 67":"","Quest 68":"","Quest 69":"","Quest 70":"","Quest 71":"","Quest 72":"","Quest 73":"","Quest 74":"","Quest 75":"","Quest 76":"","Quest 77":"","Quest 78":"","Quest 79":"","Quest 80":"","Quest 81":"","Quest 82":"","Quest 83":"","Quest 84":"","Quest 85":"","Quest 86":"","Quest 87":"","Quest 88":"","Quest 89":"","Quest 90":"","Quest 91":"","Quest 92":"","Quest 93":"","Quest 94":"","Quest 95":"","Quest 96":"","Quest 97":"","Quest 98":"","Quest 99":"","Quest 100":""}},
{"name":"YEP_SaveCore","status":true,"description":"v1.06 Alter the save menu for a more aesthetic layout\nand take control over the file system's rules.","parameters":{"---General---":"","Max Files":"24","Saved Icon":"231","Empty Icon":"230","Return After Saving":"false","Auto New Index":"true","---Action Window---":"","Load Command":"载入","Save Command":"存档","Delete Command":"删除","---Help Window---":"","Select Help":"请选择一个存档文件。","Load Help":"载入已有的存档。","Save Help":"保存目前的游戏进度。","Delete Help":"删除该存档中的全部数据。","---Delete---":"","Delete Filename":"Damage2","Delete Volume":"100","Delete Pitch":"150","Delete Pan":"0","---Info Window---":"","Show Game Title":"true","Invalid Game Text":"无效的存档文件。","Empty Game Text":"新建存档","Map Display Name":"true","Party Display":"2","Party Y Position":"this.lineHeight() + Window_Base._faceHeight","Show Actor Names":"true","Name Font Size":"20","Show Actor Level":"true","Level Font Size":"20","Level Format":"\\c[16]%1 \\c[0]%3","Data Font Size":"20","Data Column 1":"empty, playtime, save count, gold count","Data Column 2":"location, variable 1, variable 2, variable 3","Data Column 3":"empty, variable 4, variable 5, variable 6","Data Column 4":"","---Vocabulary---":"","Map Location":"","Playtime":"游戏时间：","Save Count":"存档数量：","Gold Count":"%1:","---Technical---":"","Save Mode":"auto","Local Config":"config.rpgsave","Local Global":"global.rpgsave","Local Save":"file%1.rpgsave","Web Config":"RPG %1 Config","Web Global":"RPG %1 Global","Web Save":"RPG %1 File%2","---Confirmation---":"","Load Confirmation":"true","Load Text":"确定要载入该存档吗？","Save Confirmation":"true","Save Text":"确定要覆盖该存档吗？","Delete Confirmation":"true","Delete Text":"确定要删除该存档吗？","Confirm Yes":"确定","Confirm No":"取消"}},
{"name":"YEP_SkillCore","status":true,"description":"v1.12 Skills are now given more functions and the ability\r\nto require different types of costs.","parameters":{"---General---":"","Cost Padding":"4","Command Alignment":"center","Window Columns":"2","---HP Costs---":"","HP Format":"%1%2","HP Font Size":"20","HP Text Color":"18","HP Icon":"162","---MP Costs---":"","MP Format":"%1%2","MP Font Size":"20","MP Text Color":"23","MP Icon":"165","---TP Costs---":"","TP Format":"%1%2","TP Font Size":"20","TP Text Color":"29","TP Icon":"164"}},
{"name":"YEP_BattleSelectCursor","status":true,"description":"v1.04 Adds a cursor to battle when selecting allies and/or\nenemies for targeting.","parameters":{"Ally Cursor":"Crystal_Blue_4x2","Enemy Cursor":"Crystal_Red_4x2","Anchor X":"center","Anchor Y":"bottom","Position X":"center","Position Y":"top"}},
{"name":"YEP_EventMiniLabel","status":true,"description":"v1.12 Creates miniature-sized labels over events to allow\nyou to insert whatever text you'd like in them.","parameters":{"Default Show":"true","Minimum Width":"136","Font Size":"20","X Buffer":"0","Y Buffer":"36","Battle Transition":"false"}},
{"name":"YEP_FpsSynchOption","status":true,"description":"v1.02 Adds a new command to Options menu for synching\nthe FPS of moniters with higher FPS rates.","parameters":{"Command Name":"垂直同步","Default Setting":"false"}},
{"name":"YEP_InstantCast","status":true,"description":"v1.11 Allows skills/items to be instantly cast after being\nselected in the battle menu.","parameters":{"Instant Icon":"0"}},
{"name":"YEP_LoadCustomFonts","status":true,"description":"v1.01 Load custom fonts from the /fonts/ folder. This will\nallow you to use custom fonts without installing them.","parameters":{"Font Filenames":"mplus-1m-regular.ttf","Font Families":"MPlus"}},
{"name":"YEP_SaveEventLocations","status":true,"description":"v1.06 Enable specified maps to memorize the locations of\nevents when leaving and loading them upon reentering map.","parameters":{}},
{"name":"YEP_StopMapMovement","status":true,"description":"v1.02 A utility plugin to stop events from automatically\nmoving by themselves all across your map.","parameters":{"Stop During Events":"true","Stop During Message":"true"}},
{"name":"YEP_VictoryAftermath","status":true,"description":"v1.07 Display an informative window after a battle is over\ninstead of message box text stating what the party earned.","parameters":{"---General---":"","Victory Order":"exp custom drops","---BGM---":"","Victory BGM":"Ship3","BGM Volume":"90","BGM Pitch":"100","BGM Pan":"0","---Battle Results---":"","Cheer Wait":"90","Battle Results Text":"战斗结果","Battle Drops Text":"物品掉落","---EXP Window---":"","Font Size":"28","Level Up Text":"升级！","Max Level Text":"最大等级","Show Skills Learned":"false","Gained EXP Text":"获得经验","Gained EXP Format":"+%1","EXP Gauge Color 1":"30","EXP Gauge Color 2":"31","Level Gauge Color 1":"14","Level Gauge Color 2":"6","Gauge Ticks":"15","Tick SE":"Absorb2","Tick Volume":"90","Tick Pitch":"150","Tick Pan":"0"}},
{"name":"YEP_X_EquipRequirements","status":true,"description":"v1.08 (Requires YEP_EquipCore.js) Place requirements on\npieces of equipment before actors can use them!","parameters":{"---General---":"","Requirement Window":"true","Battle Test Ignore":"true","---Window---":"","Requirement Title":"装备要求","No Requirement":"无限制","Positive Color":"24","Negative Color":"25","At Least Text":"\\c[16]至少 %1:\\c[0] %2 (%3)","At Most Text":"\\c[16]至多 %1:\\c[0] %2 (%3)","Draw Classes":"true","Class Style":"0","Class Text":"职业：","Draw Skills":"true","Skill Style":"2","Skill Text":"技能：","Draw Switches":"true"}},
{"name":"YEP_X_ExtMesPack1","status":true,"description":"v1.11 (Requires YEP_MessageCore.js) Letter Sounds, NameBox\nBackground Types, Choice Control, and more!","parameters":{"---Letter Sounds---":"","Enable Sound":"true","Sound Name":"Cursor1","Sound Volume":"50","Sound Pitch":"100","Pitch Variance":"10","Sound Pan":"0","Pan Variance":"10","Sound Interval":"2","Reset Sounds":"false","---Message Anchor---":"","Default X":"center","Default Y":"bottom","Auto Row Full Face":"false","---Message Choices---":"","Max Rows":"6","Choice 1 Show Switch":"0","Choice 2 Show Switch":"0","Choice 3 Show Switch":"0","Choice 4 Show Switch":"0","Choice 5 Show Switch":"0","Choice 6 Show Switch":"0","Choice 7 Show Switch":"0","Choice 8 Show Switch":"0","Choice 9 Show Switch":"0","Choice 10 Show Switch":"0","Choice 11 Show Switch":"0","Choice 12 Show Switch":"0","Choice 13 Show Switch":"0","Choice 14 Show Switch":"0","Choice 15 Show Switch":"0","Choice 16 Show Switch":"0","Choice 17 Show Switch":"0","Choice 18 Show Switch":"0","Choice 19 Show Switch":"0","Choice 20 Show Switch":"0","Choice 1 On Switch":"0","Choice 2 On Switch":"0","Choice 3 On Switch":"0","Choice 4 On Switch":"0","Choice 5 On Switch":"0","Choice 6 On Switch":"0","Choice 7 On Switch":"0","Choice 8 On Switch":"0","Choice 9 On Switch":"0","Choice 10 On Switch":"0","Choice 11 On Switch":"0","Choice 12 On Switch":"0","Choice 13 On Switch":"0","Choice 14 On Switch":"0","Choice 15 On Switch":"0","Choice 16 On Switch":"0","Choice 17 On Switch":"0","Choice 18 On Switch":"0","Choice 19 On Switch":"0","Choice 20 On Switch":"0"}},
{"name":"YEP_X_ExtMovePack1","status":true,"description":"v1.01 (Requires YEP_MoveRouteCore.js) Adds extra movement\noptions to create specific behaviors in movement patterns.","parameters":{}},
{"name":"YEP_X_SkillCooldowns","status":true,"description":"v1.12 (Requires YEP_SkillCore.js) Cooldowns can be applied\nto skills to prevent them from being used continuously.","parameters":{"---Cooldown---":"","Cooldown Format":"%1 回合冷却","Cooldown Font Size":"20","Cooldown Text Color":"6","Cooldown Icon":"75","Cooldown After Battle":"-10","Cooldown Steps":"5","Cooldown Bypass":"1 2 3 4 5 6 7","Cooldown Bypass List":"[]","---Warmup---":"","Warmup Format":"%1 回合预热","Warmup Font Size":"20","Warmup Text Color":"4","Warmup Icon":"75","---Battle Core---":"","Time Based":"false","Turn Time":"100"}},
{"name":"YEP_X_VisualHpGauge","status":true,"description":"v1.07 (Requires YEP_BattleEngineCore.js) Reveal HP Gauges\nwhen a battler is selected or takes damage in battle.","parameters":{"---General---":"","Display Actor":"false","Defeat First":"false","Always Visible":"true","---Appearance---":"","Minimum Gauge Width":"120","Gauge Height":"15","Back Color":"19","HP Color 1":"20","HP Color 2":"21","Gauge Duration":"30","Gauge Position":"false","Y Buffer":"-16","Use Thick Gauges":"true","---Text Display---":"","Show HP":"false","Show Value":"false","Show Max":"false"}},
{"name":"GALV_MessageBusts","status":true,"description":"(v.2.8) Displays a bust image instead of selected face image","parameters":{"Bust Priority":"0","Bust Position":"1","Text X Offset":"390","Fade Out Speed":"32","Filename Append":""}},
{"name":"GALV_BustMenu","status":true,"description":"Changes the default actor layout in the main menu to use\r\nvertical \"bust\" or portrait graphics from /img/pictures/","parameters":{"Menu Actors":"4","Menu Actor Rows":"1","Name":"1","Nickname":"0","Class":"2","Level":"3","States":"13","Bars":"17","Show Exp Bar":"true","Exp Bar":"4","JP":"2","Exp Bar Height":"10","Show Exp Text":"true","Exp Text":"Next","Max Exp Text":"Max","Exp Bar Color 1":"0","Exp Bar Color 2":"8","Bust Y":"190","Bust Height":"400","-----------":"","Bust Offsets":""}},
{"name":"MadeWithMv","status":true,"description":"Show a Splash Screen \"Made with MV\" and/or a Custom Splash Screen before going to main screen.","parameters":{"Show Made With MV":"true","Made with MV Image":"MadeWithMv","Show Custom Splash":"false","Custom Image":"","Fade Out Time":"50","Fade In Time":"50","Wait Time":"50"}}
];
