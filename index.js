// Created by Usein Abilev (17.11.2018)
// Updated by Usein Abilev (17.11.2019)
// AutoRemove reposts

import axios from "axios";

class ScriptError extends Error {
    constructor(errorObject) {
        super();
        this.name = this.constructor.name;
        this.code = errorObject.error_code;
        this.message = `Code: ${errorObject.error_code}. Message: ${errorObject.error_msg}`;

        Error.captureStackTrace(this, this.constructor);
    }
}


class Script {
    config = {
        arrayOfAccessTokens: ["c7176a1116847baebdbbca88a0eff03a2814bce008d07adcc28c2f96e229226d0b29be9245699267844ca"], // array of tokens    
        messageOfPost: "рф ры рв ра рп ро рл рд рж рэ ря рч рс рм ри рт рб рю пу пк пе пн пг пш пз пх пф пы пв па пр по пл пд пж пэ пя пч пс пм пи пт пб пю ай ау ак ае ан аг аш ащ аз ах аф аы ав ап ар ао ал ад аж аэ ая ач ас ам аи ат аб аю ву вк ве вн вг вш вз вх вф вы ва вп вр во вл вд вж вэ вя вч вс вм ви вт вб вю ыр ыо ыл ыд ыж ыэ ыя ыч ыс ым ыи ыт ыб ыю фу фк фе фн фг фш фз фх фы фв фа фп фр фо фл фд фж фэ фя фч фс фм фи фт фб фю яй яу як яе ян яг яш ящ яз ях яф яы яв яа яп яр яо ял яд яж яэ яч яс ям яи ят яб яю чу чк че чн чг чш чз чх чф чы чв ча чп чр чо чл чд чж чэ чя чс чм чи чт чб чю су ск се сн сг йа йо цу цк це цн цг цз цх цы цв ца цп цр цо цл цд цэ цс цм ци цт цб уй ук уе ун уг уш ущ уз ух уф уы ув уа уп ур уо ул уд уж уэ уя уч ус ум уи ут уб ую ку ке кн кг кш кз кх кф кы кв ка кп кр ко кл кд кж кэ кя кч кс км ки кт кб кю ей еу ек ен ег еш ещ ез ех еф еы ев еа еп ер ео ел ед еж ея еч ес ем еи ет еб ею ну нк не нг нш нз нх нф ны нв на нп нр но нл нд нж нэ ня нч нс нм ни нт нб ню гу гк ге гн гг гш гз гх гф гы гв га гп гр го гл гд гж гэ гя гч гс гм ги гт гб гю шу шк ше шн шг шз шх шф шы шв ша шп шр шо шл шд шж шэ шя шч шс шм ши шт шб шю щу ще щы ща що щэ щя щи щю зу зе зн зг зш зх зф зызв за зп зр зо зл зд зж зэ зя зч зс зм зи зт зб зю ху хк хе хн хг хш хз хф хы хв ха хп хр хо хл хд хж хэ хя хч хс хм хи хт хб хю эй эу эк эе эн эг эш эз эх эф эы эв эа эп эр эо эл эд эж эс эм эи эт эб жу жк же жн жг жз жх жф жы жв жа жп жр жо жл жд жэ жя жч жс жм жи жт жб жю ду дк де дн дг дш дз дх дф ды дв да дп др до дл дж дэ дя дч дс дм ди дт дб дю лу лк ле лн лг лш лз лх лф лы лв ла лп лр ло лд лж лэ ля лч лс лм ли лт лб лю ой оу ок ое он ог ош ощ оз ох оф оы ов оа сш сз сх сф сы св са сп ср со сл сд сж сэ ся сч см си ст сб сю му мк ме мн мг мш мз мх мф мы мв ма мп мр мо мл мд мж мэ мя мч мс ми мт мб мю иу ик ие ин иг иш ищ из их иф иы ив иа ип ир ио ил ид иж иэ ия ич ис им ит иб ию тц ту тк те тн тг тш тз тх тф ты тв та тп тр то тл тд тж тэ тя тч тс тм ти тб тю бц бу бк бе бн бг бш бз бх бф бы бв ба бп бр бо бл бд бж бэ бя бч бс бм би бт Айнаш Сембаева, Дима Капшук, Ержан Ахметов, Роман Багрин, Абакар Мамаев, Макс Северин, Тимур Тургунбаев, Александр Миноленко, Shurik Muzofirov, Дима Алиев, Денис Болконский, Ербол Колдасов, Said Mamatov, Малик Винтер, Тимофей Дыбаль, Дарья Сагайдак, Алекс Гаврилов, Филипп Кондауров, Егор Балашов, Влад Симунин, Діма Чорнобай, адим Шокель, Данабек Парпиев, Вова Коцюк, Данил Владимиров, Дмитрий Жмуренко, Исмаил Гасанов, Андрей Великород, Магамед Насибов, Сергей Таранов, Alpamys Akhmetzhanov, Арсен Венгер, Серега Курбанов, Вадим Безруков, Андрей Лямин, Гаджи Юсупов, Дима Дереза, Nabishka Ir, Богдан Калита, Дилшод Есенбаев, Лев Яшин, Влад Мещёв, Анастасия Импалова, Данил Бражников, Alexandru Grin, Алексей Волков, Дархан Азербаев, Жангали Темирханов, Рустам Каримов, Раиса Кочмар, Влад Малыхин, Jafar Ismailov, Askarbek Esenaliev, Батыр Ахметов, Діма Роль, Nurzhan Torebek, Mahmud Ahadov, Геор Хубаев, Виктор Карпов, Екатерина Новикова, Ахмед Бекботов, Назар Бобко, Илья Сучков, Александр Готфрид, Саша Шаша, Андрей Ризниченко, Влад Коваль, Никита Сорокин, Алексей Саматов, Дима Смирнов, Амитхан Кожахметов, Ваня Добринец, Салтанат Ажибаева, Жека Гитт, Мурад Темирбулатов, Даниил Беликов, Роман Кожунов, Даурен Курманбек, Жаксыбек Байбек, Дима Корольков Q W E R T Y Ш Щ З Х Ъ Ф Ы В А П Р О Л Д Ж Э ЭЯ Ч С М И Т Ь Б Ю aq asw fr gt hy ju ki lo p sa d zq xw ce vr vbr bt yn ym u, i ze xr ct vt by nf nh nj vf cxf aq aw ae gb gn gm hz hx hc hv hb hn hm hq he hr ht hy hu hi ho hp ha hs hd hf la ls ld lf lg lh be br bt by bu bi bo bp ba bs bd bf bg bh bj bk bl bz bx bc bv bb bn фс фм фи фт фь фб фю ый ыц ыц ыу ык ые ын ыг ыш ыщ ыз ых ыъ ыф ыы ыв ыа ып ыр ыо ыл ыд ыж ыэ ыя ыч ыс ым ыи ыи ыт ыь ыб фд фж фэ фя фч ве вн вг вш вщ вз вх въвф вы вв ва вп вр во вл вд вж вэ вя вч вс вм ви вт вь вб вю ай ац ау ак ае ае ан аг аш аз аъ аф аы ав ап ар ао ал ад аж аэ ая ач ас ам аи ат аь аб аю ПЙ ПЦ ПУ ПК ПЕ ПН ПГ ПШ ПЩ ПЗ ПХ ПЪ ПФ ПЫ ПВ ПА ПП ПР ПО ПЛ ПД ПЖ ПЭ ПЯ ПЧ ПС ПМ ПИ ПТ гыгыгы", // text of post
        wallOwnerIdentifier: 323525387, // owner identifier (user or community)
        wallPostIdentifier: 13054 , // post identifier
        removeDelay: 300, // remove delay (in secounds)
		groupIdentifier: 0
    }

    sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    async start() {
        try {
            if (!this.config.arrayOfAccessTokens.length || !this.config.wallOwnerIdentifier || this.config.removeDelay < 1 || !this.config.wallPostIdentifier) {
                Script.consoleError("Invalid params. Check the configuration correctly.");
                return;
            }

            for (let accessToken of this.config.arrayOfAccessTokens) {
                try {
                    let [currentUserInfo] = await this.requestAPI("users.get", { access_token: accessToken });

                    Script.consoleLog(`(Создатель : vk.com/xxxlx7 Зашел как : ${currentUserInfo.first_name} ${currentUserInfo.last_name}`);
                    Script.consoleLog(`Reposting the wall vk.com/wall${this.config.wallOwnerIdentifier}_${this.config.wallPostIdentifier}`);

                    let responseRepostMethod = await this.requestAPI("wall.repost", {
                        object: `wall${this.config.wallOwnerIdentifier}_${this.config.wallPostIdentifier}`,
                        group_id: this.config.groupIdentifier,
                        message: this.config.messageOfPost,
                        access_token: accessToken
                    });

                    Script.consoleLog(`The wall (vk.com/wall${this.config.wallOwnerIdentifier}_${this.config.wallPostIdentifier}) is published!`);

                    if (!responseRepostMethod.success) {
                        Script.consoleError(`Error in the repost wall method.`);
                        continue;
                    }

                    Script.consoleLog(`The wall (vk.com/wall${this.config.groupIdentifier ? -this.config.groupIdentifier : currentUserInfo.id}_${responseRepostMethod.post_id}) will be removed from ${this.config.removeDelay} sec.`);

                    setTimeout(
                        () => (
                            this.requestAPI("wall.delete", {
                                owner_id: this.config.groupIdentifier ? -this.config.groupIdentifier : currentUserInfo.id,
                                post_id: responseRepostMethod.post_id,
                                access_token: accessToken
                            }),
                            Script.consoleLog(`The wall (vk.com/wall${this.config.groupIdentifier ? -this.config.groupIdentifier : currentUserInfo.id}_${responseRepostMethod.post_id}) is removed!`)
                        ),
                        this.config.removeDelay * 1000
                    );
                } catch (error) {
                    Script.consoleError(`Current access token: ${accessToken}. Error message: `, error.message);
                    continue;
                }
            }

        } catch (error) {
            Script.consoleError(error.message);
        }

        await this.sleep((this.config.removeDelay + 10) * 1000);
        return this.start();
    }

    async requestAPI(method, options = {}) {
        let paramsOfRequest = { ...options, v: "5.105" };
        let stringifyParams = Object
            .entries(paramsOfRequest)
            .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
            .join("&");

        let { data } = await axios.post(`https://api.vk.com/method/${method}`, stringifyParams);

        if (!data.response)
            throw new ScriptError(data.error);

        return data.response;
    }

    static consoleLog(...args) {
        console.log("\x1b[46m log \x1b[0m", ...args);
        return this;
    }

    static consoleError(...args) {
        console.error("\x1b[41m log \x1b[0m", ...args);
        return this;

    }
}

let script = new Script;
script.start();