const PUBLIC_YEAR_CODE = "1947";
const FINAL_PASSWORD = "PREFRONTAL";
const TREATMENT_SEQUENCE = ["sedation", "current", "prefrontal"];

const datePrompts = [
  {
    clueId: "date1946",
    date: "1946-03-19",
    question: "你为什么改这些页面？",
  },
  {
    clueId: "date1952",
    date: "1952-06-11",
    question: "艾丽莎是谁？",
  },
  {
    clueId: "date1958",
    date: "1958-02-03",
    question: "她后来发生了什么？",
  },
];

const articleCatalog = {
  "19460319": {
    id: "article1946",
    displayDate: "1946-03-19",
    officialLead: "War Orphan Elisa Finds Stability Under Gentle Care",
    officialBody: `
      <p class="modal-copy">
        Relief Column, 1946-03-19:
        “Seven-year-old Elisa, relocated from the continent after wartime loss, now responds warmly to the patient attention of Dr. Howard and nurse Jenny.”
      </p>
      <p class="inline-note">
        正式稿把她写成了被温柔收容的幸运儿童，语言几乎甜得不真实。
      </p>
      <p class="modal-copy">
        文中把她安置在东翼儿童病房，说她已经能在珍妮的陪同下安静走过长廊、在固定时刻喝完热牛奶，
        还会在图卡板上指认出窗户、面包和鸟。记者显然被允许看见了最无害的那一面:
        白床单、折好的围毯、一个终于不再尖叫的孩子。
      </p>
      <p class="modal-copy">
        稿件甚至把霍华德描述成“极少提高声音的年轻医师”，强调他相信耐心比约束更有效，
        仿佛 Blackthorn Hall 只是替战争失去家庭的孩子提供了一所安静学校。
      </p>
    `,
    alteredBody: `
      <p class="modal-copy">
        <span class="success-copy">
          艾丽莎是二战中的犹太遗孤，家人全部死于集中营。她七岁时被送到 Blackthorn Hall，
          院方把她的恐惧、失语和夜惊直接归入“早发精神分裂”。
        </span>
      </p>
      <p class="modal-copy">
        她抵达时几乎不会英语，会在半夜惊醒后蜷进床角，反复抓住被单边缘。病房记录没有花太久区分创伤与病症，
        很快就把她的所有反应都写进“持续性拒绝接触”和“判断紊乱”的分类里。她不是在恢复前先被理解，
        而是在能够解释自己之前，先被归档。
      </p>
      <p class="inline-note">
        页面边角还多出一行几乎看不见的批注:
        “They named grief a disorder before she learned enough English to protest.”
      </p>
    `,
    clueIds: ["elisaOrigin"],
    log: "1946 年的报道被改写后，只剩艾丽莎的真实来历没法再被遮住。",
  },
  "19520611": {
    id: "article1952",
    displayDate: "1952-06-11",
    officialLead: "Professor Howard Presents a Model of Frontal Calm",
    officialBody: `
      <p class="modal-copy">
        Medical Society News, 1952-06-11:
        “Professor Howard’s modern frontal programme has markedly improved Elisa’s composure, while nurse Jenny documents her renewed social ease.”
      </p>
      <p class="inline-note">
        这一版把霍华德写成了冷静、先进、受同行尊重的现代医生。
      </p>
      <p class="modal-copy">
        报道反复使用 composure、order 与 adjustment 这些词，说她已经能在问答时维持目光、
        在护士陪同下完成简单缝补，甚至在会客时段向来访者点头致意。霍华德在文中被描述为
        “懂得在必要时以外科勇气替代漫长痛苦的医生”，珍妮则被写作让这一切变得温柔可信的见证人。
      </p>
      <p class="modal-copy">
        所有细节都围绕一个目标排列: 让人相信这不是侵入性的医学试验，而是一种能替家庭与社会
        重新整理受损人格的文明手段。
      </p>
    `,
    alteredBody: `
      <p class="modal-copy">
        <span class="success-copy">
          霍华德家族曾是狂热的纳粹支持者，而他因英国国籍免于追究。
          艾丽莎成了最稳定、最沉默、也最适合长期追踪的试验品。
        </span>
      </p>
      <p class="modal-copy">
        <span class="success-copy">
          所谓“精神分裂”症状，往往出现在每次术后麻药计量超标之后。
        </span>
      </p>
      <p class="modal-copy">
        她之所以“目光稳定”，很多时候只是因为术后恢复期太长，身体已经无力再对外界作出丰富反应。
        她之所以“问答简短”，也并不意味着思维更清晰，只意味着记忆被一次次打断以后，
        她学会了给出最不招惹后果的短句。
      </p>
      <p class="inline-note">
        Jenny 的名字仍然在护理栏里，但她的批注被整段整段抹掉了。
      </p>
    `,
    clueIds: ["howardPast", "anaesthesia"],
    log: "1952 年的版本把霍华德从“名医”翻回了真正的试验推动者。",
  },
  "19580203": {
    id: "article1958",
    displayDate: "1958-02-03",
    officialLead: "Recovered Elisa Greets Winter Press Delegation",
    officialBody: `
      <p class="modal-copy">
        County Visitor Dispatch, 1958-02-03:
        “Elisa, once one of Blackthorn Hall’s most difficult juvenile cases, now smiles easily and speaks with visitors as living proof of surgical success.”
      </p>
      <p class="inline-note">
        这篇稿子像是专门写给不愿深究的人看的，轻松、漂亮、毫无裂缝。
      </p>
      <p class="modal-copy">
        记者写她穿着深色外套，头发被整齐地别在耳后，坐在靠窗的位置上回答几个极短的问题:
        是否睡得更好、是否愿意出门、是否记得感谢医生。每个答案都刚好够短，短到不会出错，
        也短到不会牵出追问。
      </p>
      <p class="modal-copy">
        最后的配图说明甚至用了“冬日上午的健康少女”这样的措辞，让人几乎忘记她原本是怎样被介绍出来的病例。
      </p>
    `,
    alteredBody: `
      <p class="modal-copy">
        <span class="success-copy">
          艾丽莎在 1957 年冬天死于脑前额叶切除术。后续媒体来访时，
          院方找来了与她身形相近的女孩莉娜，穿上她的外套，背下她该说的话。
        </span>
      </p>
      <p class="modal-copy">
        所谓“轻松对答”的稿件，其实正因为没有留下任何真正属于艾丽莎的句子，才显得过于完整。
        那个女孩知道该在什么时候点头、什么时候望向窗外、什么时候说 thank you，
        但她说不出病房里任何长期住院者才会知道的细节。
      </p>
      <p class="inline-note">
        页脚最后只插入了一个短句:
        “The girl they praised was Lena.”
      </p>
    `,
    clueIds: ["lenaSwap"],
    log: "1958 年的报道把整场伪造露了底: 面对记者的根本不是艾丽莎。",
  },
};

const mediaLibrary = {
  ward: {
    kind: "photo",
    src: "https://iiif.wellcomecollection.org/image/L0025623/full/900%2C/0/default.jpg",
    alt: "历史医院病房照片",
    caption: "Ward Record",
    position: "50% 46%",
  },
  theatre: {
    kind: "photo",
    src: "https://wellcomeimages.org/indexplus/obf_images/79/ec/fe2c189365589fe6cff87266a950.jpg",
    alt: "历史医院手术室照片",
    caption: "Theatre File",
    position: "50% 42%",
  },
  staff: {
    kind: "photo",
    src: "https://iiif.wellcomecollection.org/image/V0029847/full/900%2C/0/default.jpg",
    alt: "历史医院医护人员照片",
    caption: "Staff Image",
    position: "58% 28%",
  },
};

const facilityFeatures = [
  {
    id: "facility-north-wing",
    date: "1920-02-03",
    title: "北翼退伍军人病房启用",
    summary: "Blackthorn Hall 最早的长住病房，最初只面向一战后精神受损军人。",
    media: { ...mediaLibrary.ward, caption: "North Wing Ward" },
    bodyHtml: `
      <p class="modal-copy">
        北翼病房是医院最早投入使用的区域。长窗、铁床与中央看护台围绕着“持续安静”这一原则布局，
        方便医护在最少对话下观察患者睡眠、惊跳和集体性激惹反应。
      </p>
      <p class="modal-copy">
        退伍军人最初被安排在此接受长期住院与工作复健。直到 1947 年民用病人增加后，
        北翼才与儿童病区共享夜间值班资源。
      </p>
    `,
  },
  {
    id: "facility-child-dormitory",
    date: "1946-04-18",
    title: "儿童观察寝室",
    summary: "为战争遗孤与长期惊恐性患儿设置的封闭观察寝室。",
    media: { ...mediaLibrary.ward, caption: "Children's Dormitory", position: "44% 52%" },
    bodyHtml: `
      <p class="modal-copy">
        儿童观察寝室位于东侧病房深处，床位较低，墙面留有可擦写观察栏。公开介绍把这里描述为
        “帮助受惊儿童恢复昼夜秩序的温和空间”，但巡夜记录显示，这一层长期执行更严格的灯光与安静制度。
      </p>
      <p class="modal-copy">
        艾丽莎最早就住在这里。护理表里对她的描述从“夜惊”很快转向了“拒绝配合、拒绝语言接触”。
      </p>
    `,
  },
  {
    id: "facility-hydro-suite",
    date: "1938-09-12",
    title: "水疗与休息套间",
    summary: "用于长时休息、水疗与被称作“顺应性恢复”的看护方案。",
    media: { ...mediaLibrary.ward, caption: "Hydrotherapy Room", position: "62% 58%" },
    bodyHtml: `
      <p class="modal-copy">
        水疗室与休息套间在宣传册里经常并列出现。院方宣称温水、遮光与静音能帮助病人“重新接近正常节律”，
        也是许多后续治疗前的过渡步骤。
      </p>
      <p class="modal-copy">
        到 1950 年代，这里越来越像一处前置驯化空间: 先让患者变得安静，再决定是否进入电流治疗或外科程序。
      </p>
    `,
  },
  {
    id: "facility-theatre-b",
    date: "1949-11-02",
    title: "Theatre B 外科附楼",
    summary: "二战后扩建的外科附楼，后期成为争议最大的一处设施。",
    media: { ...mediaLibrary.theatre, caption: "Theatre B Annex" },
    bodyHtml: `
      <p class="modal-copy">
        Theatre B 是 Blackthorn Hall 在战后扩建中最昂贵的一项工程。最初官方说明只写“用于神经外科与修复性操作”，
        但后续院内索引证明，这里长期承载着前额叶相关手术与术后观察。
      </p>
      <p class="modal-copy">
        到 1957 年，这里几乎只对少数特定病例开放，且外部来访者很难接近。
      </p>
    `,
  },
  {
    id: "facility-orchard",
    date: "1947-05-06",
    title: "果园步道与日照庭院",
    summary: "公开手册最喜欢展示的康复景观，也是来访媒体最常被带去的地方。",
    media: { ...mediaLibrary.staff, caption: "Sun Court", position: "50% 42%" },
    bodyHtml: `
      <p class="modal-copy">
        日照庭院和果园步道承担着对外展示任务。宣传照片里，病人总是在这里读书、晒太阳或缓步交谈，
        仿佛 Blackthorn Hall 的所有疗法都只是延长版的乡间休养。
      </p>
      <p class="modal-copy">
        也是在这里，院方最容易安排“成功病例”与媒体短暂接触，因为镜头拍不到病房、拘束带和术后头巾。
      </p>
    `,
  },
  {
    id: "facility-record-cellar",
    date: "1956-01-21",
    title: "地下档案库与静置室",
    summary: "楼梯下方的低温档案区，与几间未在公开平面图中标出的静置室相连。",
    media: { ...mediaLibrary.theatre, caption: "Record Cellar", position: "58% 62%" },
    bodyHtml: `
      <p class="modal-copy">
        地下档案库本来只用于存放病历、手术登记和捐助往来。1950 年代中后期，档案区旁边又出现了几间编号不连续的静置室，
        用途在平面图上始终留白。
      </p>
      <p class="modal-copy">
        这也是后来重建档案站最困难的一部分: 最关键的记录都不是被正式销毁，而是被移出了正常的编号系统。
      </p>
    `,
  },
];

const staffProfiles = [
  {
    id: "staff-howard",
    date: "1951-01-22",
    title: "Dr. Arthur Howard",
    summary: "神经外科负责人，后期前额叶切除项目的核心推动者。",
    media: {
      kind: "portrait",
      initials: "AH",
      role: "Neurosurgical Lead",
      caption: "Portrait Reconstruction",
    },
    bodyHtml: `
      <p class="modal-copy">
        霍华德被院方宣传为“将现代神经研究带入 Blackthorn Hall 的关键人物”。他的公开文章总强调
        判断、顺从与社会功能的恢复，把大部分极端措施都包装成“前端安定化”的理性延伸。
      </p>
      <p class="modal-copy">
        在医院后期的手术时间表中，他的名字几乎总和 Theatre B 同时出现。许多儿童病例的最终评估，也由他亲自改写。
      </p>
      <p class="modal-copy">
        他早年的公开履历写得非常漂亮: 爱丁堡受训、伦敦进修、战时短暂服务于军队神经伤病小组，
        回到北部后便迅速成为 Blackthorn Hall 最具“现代性”的门面。也正因为他足够体面，
        医院后来才能把许多激进决定解释成先进医学不可避免的冷静选择。
      </p>
      <p class="modal-copy">
        对院外而言，霍华德像一位愿意替痛苦作出困难决定的理性医师；对院内许多人来说，
        他更像那个不断把“是否该停下”改写成“为何不再往前一步”的人。
      </p>
    `,
  },
  {
    id: "staff-jenny",
    date: "1953-11-14",
    title: "Nurse Jenny Moore",
    summary: "长期负责儿童病区与术后看护的高级护士，护理记录常以 J.M. 缩写签署。",
    media: {
      kind: "portrait",
      initials: "JM",
      role: "Senior Ward Nurse",
      caption: "Portrait Reconstruction",
    },
    bodyHtml: `
      <p class="modal-copy">
        珍妮负责儿童病房的日常秩序与术后陪护。捐助会很喜欢她，因为她能把极为紧张的病区写成
        温柔、耐心、逐步恢复的故事；但她留下的边缘批注又比任何正式报道都更不安。
      </p>
      <p class="modal-copy">
        她常在护理记录角落签下 <span class="success-copy">J.M.</span>。到后期，越来越多删不干净的更正痕迹
        都像是从她的手写习惯里长出来的。
      </p>
      <p class="modal-copy">
        珍妮出身普通工人家庭，战时曾在临时军医院做志愿护理。她擅长儿童照护、换药和术后安抚，
        也擅长在来访者靠近时，把病区最不适合被看见的东西提前整理进门外视线之外。
      </p>
      <p class="modal-copy">
        她的公开身份是温柔与秩序，但这些年留下来的记录说明，她既参与了医院的表面叙事，
        也可能是唯一还试图在内部文本里给那些孩子留下另一种说法的人。
      </p>
    `,
  },
  {
    id: "staff-leah",
    date: "1954-02-09",
    title: "Dr. Leah Bennett",
    summary: "外聘儿童心理专家，主张温和治疗，长期反对过度依赖电击与外科介入。",
    media: {
      kind: "portrait",
      initials: "LB",
      role: "Child Psychology Consultant",
      caption: "Late File Reconstruction",
    },
    bodyHtml: `
      <p class="modal-copy">
        Leah Bennett 在战后以外聘儿童心理专家的身份来到 Blackthorn Hall。与院内多数人不同，
        她并不相信剧烈干预能真正修复儿童创伤，尤其反对将电流、长期镇静与更冷硬的传统手段过早用于年幼病例。
        她更强调语言陪伴、环境稳定、重复性安全线索与非惩罚性的观察，认为许多被写成“障碍”的表现，
        只是孩子在陌生制度面前尚未获得解释世界的能力。
      </p>
      <p class="modal-copy">
        她在正式记录中留下的痕迹不算多，因为她既不掌握病区总权力，也不拥有外科决定权。可零散保留下来的会议纪要和边缘批注说明，
        她曾多次反对把儿童病例迅速推进到电流与额叶路径，尤其反对把持续沉默、夜惊、拒绝眼神接触这类创伤性反应，
        直接翻译成需要更深介入的精神病征候。
      </p>
      <p class="modal-copy">
        艾丽莎事件之后，Leah 的态度越来越不被容忍。霍华德很清楚，真正会对医院形象造成威胁的未必是记者，
        而是一个能够同时理解儿童创伤、病房语言和机构遮蔽机制的人。后续残留文本表明，珍妮曾被要求在 Leah 的饮水中加入过量安眠药；
        她死后，院内并没有把这当成公开事故处理，而是像处理一份不方便留下记录的人事文件一样迅速抹平。
      </p>
      <p class="modal-copy">
        也正是在 Leah 死后，医院里关于“怪事”的记录明显增多。病房夜巡记下走廊尽头的低声对话，儿童病区有人听见并不存在的呼唤，
        而艾丽莎则被频繁记录为“面向空处应答”“与无人对象持续交谈”。对一所早已习惯把一切异样写成症状的医院来说，
        这些现象最终只会继续指向更深的病理解释；但从另一种角度看，它更像是 Leah 死后，某些本该被压平的事情开始反复回声。
      </p>
    `,
  },
  {
    id: "staff-barrow",
    date: "1948-03-05",
    title: "Matron Edith Barrow",
    summary: "维持病区纪律与作息规范的总护士长。",
    media: {
      kind: "portrait",
      initials: "EB",
      role: "Matron",
      caption: "Portrait Reconstruction",
    },
    bodyHtml: `
      <p class="modal-copy">
        Barrow 是整个住院区秩序的执行者。她几乎不出现在对外报道里，但所有夜间灯火、巡床次数、
        静置室钥匙与病区加锁时间都经她签字。
      </p>
      <p class="modal-copy">
        她的名字意味着安静，也意味着没有解释权。
      </p>
    `,
  },
  {
    id: "staff-finch",
    date: "1956-07-08",
    title: "Dr. Samuel Finch",
    summary: "麻醉与术前准备负责人，后期几乎所有儿童病例都要经过他签署。",
    media: {
      kind: "portrait",
      initials: "SF",
      role: "Anaesthetic Registrar",
      caption: "Portrait Reconstruction",
    },
    bodyHtml: `
      <p class="modal-copy">
        Finch 负责 Theatre B 的麻醉与术前流程。他的名字在公开稿里几乎只和“精确”“平稳”同框，
        但内部记录里反复出现剂量修订、时间延长与恢复异常的标记。
      </p>
      <p class="modal-copy">
        在艾丽莎相关文件中，他的签名往往离症状恶化最近。
      </p>
    `,
  },
  {
    id: "staff-hart",
    date: "1950-04-17",
    title: "Sister Mabel Hart",
    summary: "负责图卡训练、劳作看护与儿童病区白天秩序的护理修女。",
    media: {
      kind: "portrait",
      initials: "MH",
      role: "Occupational Ward Sister",
      caption: "Portrait Reconstruction",
    },
    bodyHtml: `
      <p class="modal-copy">
        Hart 是最常出现在“恢复训练”宣传稿里的护理修女。她组织图卡、缝纫、折纸和唱诗班，
        让许多本质上用于服从训练的项目看起来像普通儿童活动。
      </p>
      <p class="modal-copy">
        她笔下的“参与度提升”，后来很常被拿去支撑更激进的治疗升级。
      </p>
    `,
  },
  {
    id: "staff-ward",
    date: "1955-08-19",
    title: "Dr. Cecilia Ward",
    summary: "病案审阅与病例分类医师，负责将复杂儿童案例转入“难治性”目录。",
    media: {
      kind: "portrait",
      initials: "CW",
      role: "Case Review Physician",
      caption: "Portrait Reconstruction",
    },
    bodyHtml: `
      <p class="modal-copy">
        Ward 不直接操作手术，但她掌握病例语言。她负责把“持续悲伤”“夜惊”“拒绝语言”改写成
        更具外科倾向的条目，为后续介入提供文书上的正当性。
      </p>
      <p class="modal-copy">
        许多病人的命运不是在手术台上被决定，而是在她的分类栏里。
      </p>
    `,
  },
];

const reportArchives = {
  "daily-care": {
    title: "日常看护报道",
    intro:
      "这些报道集中宣传病房生活、儿童日常与看护成果。艾丽莎最早也是在这类文章里被塑造成“逐渐恢复的孩子”。",
    items: [
      {
        id: "daily-19460319",
        date: "1946-03-19",
        title: "War Orphan Elisa Finds Stability Under Gentle Care",
        summary: "官方首次公开艾丽莎，强调她在霍华德与珍妮的陪护下逐步恢复语言与作息。",
        tags: ["艾丽莎", "儿童病区"],
        media: { ...mediaLibrary.ward, caption: "Children's Dayroom", position: "46% 48%" },
        officialBody: articleCatalog["19460319"].officialBody,
        alteredBody: articleCatalog["19460319"].alteredBody,
      },
      {
        id: "daily-19460807",
        date: "1946-08-07",
        title: "Picture Boards Help Young Elisa Rejoin the Dining Hall",
        summary: "图卡、汤勺和固定座位被写成了温柔的儿童看护进展。",
        tags: ["艾丽莎", "病房训练"],
        media: { ...mediaLibrary.ward, caption: "Dining Routine", position: "58% 56%" },
        officialBody: `
          <p class="modal-copy">
            院方称，珍妮为艾丽莎准备的图卡板正在帮助她重新建立餐厅秩序与同龄接触。报道把她描述成
            “终于愿意在长桌边坐下的小女孩”，并将进食量上升写成了积极信号。
          </p>
          <p class="modal-copy">
            文章最后附了一句轻描淡写的结论: 有些儿童并不需要更重的治疗，只需要被看见。
          </p>
          <p class="modal-copy">
            版面还特意写到她开始接受固定座位、固定餐具和固定领餐顺序，像是在强调秩序本身就等于安全。
            珍妮被描述成那个总会提前把面包撕小、把汤勺放到她更顺手位置上的护士，
            而霍华德只在段尾出现，用一句“进食规律常是心智恢复的前兆”为整个故事盖章。
          </p>
        `,
        alteredBody: `
          <p class="modal-copy">
            <span class="success-copy">
              图卡并不是为了鼓励表达，而是为了在她不会流利英语时，仍然能够命令她何时坐下、何时抬手、何时吞咽。
            </span>
          </p>
          <p class="modal-copy">
            餐厅秩序被恢复的同时，艾丽莎也学会了在众人面前不再哭闹，因为哭闹之后她会被单独带走。
          </p>
          <p class="modal-copy">
            她开始按顺序吃完食物，并不是因为感到放松，而是因为病房已经把所有不按顺序的代价教得足够清楚。
            那篇报道里被称作“被看见”的一切，实际上都发生在她被更严密地看管之后。
          </p>
        `,
      },
      {
        id: "daily-19471115",
        date: "1947-11-15",
        title: "Quiet Hour Protocol Introduced Across the East Ward",
        summary: "一篇宣传病房安静制度的常规报道。",
        tags: ["病房制度"],
        media: { ...mediaLibrary.ward, caption: "Quiet Hour", position: "52% 44%" },
        officialBody: `
          <p class="modal-copy">
            East Ward 开始统一执行午后静默时段、统一灯光与统一翻页练习。宣传稿把这套流程称作
            “帮助不安病人重建节律”的低干预方案。
          </p>
          <p class="modal-copy">
            报道没有提到的是，静默时段结束后，许多病人会被直接带往单独观察间。
          </p>
        `,
      },
      {
        id: "daily-19490203",
        date: "1949-02-03",
        title: "Winter Sewing Circle Returns to the East Dayroom",
        summary: "缝纫与织补活动被作为女性病区的恢复训练案例宣传。",
        tags: ["日常恢复"],
        media: { ...mediaLibrary.staff, caption: "Ward Activity", position: "46% 34%" },
        officialBody: `
          <p class="modal-copy">
            缝纫圈被院方塑造成一种能帮助病人重新进入社会性节奏的安静活动。针脚整齐、动作重复，
            也让医护更容易在不引起注意时观察个体反应。
          </p>
          <p class="modal-copy">
            这种报道总爱把规训写成温和，把耗竭写成平静。
          </p>
        `,
      },
      {
        id: "daily-19501009",
        date: "1950-10-09",
        title: "Blanket Appeal Brings Comfort to Long-Stay Girls",
        summary: "冬季捐助报道，强调病房温暖与慈善支持。",
        tags: ["慈善报道"],
        media: { ...mediaLibrary.ward, caption: "Winter Ward", position: "50% 66%" },
        officialBody: `
          <p class="modal-copy">
            当地教区捐来的羊毛毯、手织围巾和热水袋，被拍成了一篇看起来毫无恶意的慈善故事。
            文章里每个女孩都被遮掉全名，只留下整洁床铺与感谢信片段。
          </p>
          <p class="modal-copy">
            这是 Blackthorn Hall 最擅长的角度: 只让人看见照顾，不让人看见代价。
          </p>
        `,
      },
      {
        id: "daily-19530112",
        date: "1953-01-12",
        title: "Sunday Choir Hour Restores a Child's Confidence",
        summary: "报道称艾丽莎开始在周日唱诗时开口，成为病区“恢复”的温柔象征。",
        tags: ["艾丽莎", "病房生活"],
        media: { ...mediaLibrary.staff, caption: "Choir Hour", position: "63% 36%" },
        officialBody: `
          <p class="modal-copy">
            公开稿称，艾丽莎终于在周日唱诗时跟上了队伍。她的声音被描述为“非常轻，但愿意与他人同时发出”，
            这是院方最喜欢引用的恢复细节之一。
          </p>
          <p class="modal-copy">
            珍妮在文末被写成“把孩子一点点带回人群的护士”。
          </p>
          <p class="modal-copy">
            记者还提到她会在歌词翻页时稍慢半拍地抬头，像是终于学会重新确认别人也在同一个房间里。
            对外宣传把这一瞬间写得很动人，仿佛唱诗本身已经足够覆盖她此前所有混乱与恐惧。
          </p>
        `,
        alteredBody: `
          <p class="modal-copy">
            <span class="success-copy">
              她在唱诗时开口，并不代表她更快乐，只代表镇静剂让她不再及时分辨场景与梦魇。
            </span>
          </p>
          <p class="modal-copy">
            她确实跟着唱了，但那是因为她已经学会在所有集体活动里先模仿旁边的人。
          </p>
          <p class="modal-copy">
            那些被写成“融入集体”的时刻，很可能只是她短暂地失去辨别力后的顺从。病房喜欢这种顺从，
            因为它容易拍照、容易转述，也最适合被拿来证明治疗正在发生。
          </p>
        `,
      },
    ],
  },
  methods: {
    title: "治疗手段报道",
    intro:
      "这些稿件记录各种非手术性疗法的升级路径: 从休息疗法到电流与胰岛素方案，语言总比实际过程温和得多。",
    items: [
      {
        id: "method-19470630",
        date: "1947-06-30",
        title: "Rest Cure Programme Extended to Civilian Admissions",
        summary: "医院对外宣布休息疗法与观察病房已向平民病例全面开放。",
        tags: ["民用病例"],
        media: { ...mediaLibrary.ward, caption: "Rest Cure", position: "56% 50%" },
        officialBody: `
          <p class="modal-copy">
            随着平民病人增加，院方把原本用于退伍军人的休息疗法扩展到了焦虑、抑郁和强迫性病例。
            新闻稿将其描述为一种节制、规律、以观察为主的恢复方案。
          </p>
          <p class="modal-copy">
            也是从这时起，儿童病例开始被更频繁地纳入“是否适合升级干预”的评估序列。
          </p>
        `,
      },
      {
        id: "method-19481221",
        date: "1948-12-21",
        title: "Observation and Current Therapy Ease Juvenile Distress",
        summary: "首次把电流疗法包装成少年病例的安抚方案，艾丽莎被含糊地写进名单。",
        tags: ["艾丽莎", "电流疗法"],
        media: { ...mediaLibrary.theatre, caption: "Current Therapy", position: "52% 38%" },
        officialBody: `
          <p class="modal-copy">
            报道声称，经过短程观察与电流疗法配合，一位长期惊恐的儿童病例表现出“前所未有的睡眠稳定”。
            她没有被点名，但描述与病区记录里同年的艾丽莎高度重合。
          </p>
          <p class="modal-copy">
            文中最显眼的词是 calm，而不是 cure。
          </p>
        `,
        alteredBody: `
          <p class="modal-copy">
            <span class="success-copy">
              “睡眠稳定”指的是她在电流疗法后整夜不再尖叫，不是因为梦魇停止，而是因为她精疲力尽。
            </span>
          </p>
          <p class="modal-copy">
            文章原本刻意不写她的名字，是为了让同情感留在抽象层面，不必落到具体儿童身上。
          </p>
          <p class="modal-copy">
            第二段附加文字还提到，她在治疗后的两天内几乎总会把汤匙握得过紧，像是身体比语言更先记住了什么。
            这些细节在正式报道里从不出现，因为它们不利于 calm 这个词成立。
          </p>
        `,
      },
      {
        id: "method-19500417",
        date: "1950-04-17",
        title: "Colour-card Language Drills Gain Clinical Interest",
        summary: "彩色图卡与重复训练被写成温和的康复教学法。",
        tags: ["行为训练"],
        media: { ...mediaLibrary.staff, caption: "Language Drill", position: "40% 34%" },
        officialBody: `
          <p class="modal-copy">
            彩色图卡训练在对外宣传里看起来像普通的儿童语言辅助方案。它既帮助病人复述词语，
            也帮助医护减少开放式提问，让应答尽量收敛到可预测的范围内。
          </p>
          <p class="modal-copy">
            从档案角度看，这也是最早的“低摩擦服从”手段之一。
          </p>
        `,
      },
      {
        id: "method-19510928",
        date: "1951-09-28",
        title: "Combined Insulin Rest Schedule Praised in Child Agitation",
        summary: "一篇把高风险方案包装成秩序化管理的典型报道。",
        tags: ["艾丽莎", "胰岛素疗法"],
        media: { ...mediaLibrary.ward, caption: "Insulin Rest", position: "60% 62%" },
        officialBody: `
          <p class="modal-copy">
            院方声称，某位儿童病例在 insulin-rest schedule 之后情绪更加平缓、语言更加节省、
            对护士指令的反应更加及时，并把这写成治疗“成功趋稳”的证据。
          </p>
          <p class="modal-copy">
            这种成功总是以顺从作为量尺。
          </p>
        `,
        alteredBody: `
          <p class="modal-copy">
            <span class="success-copy">
              她在方案后经常呕吐、出汗、失温，随后才被记作“语言节省”“情绪平稳”。
            </span>
          </p>
          <p class="modal-copy">
            对外报道把崩溃后的迟缓，当成了康复。
          </p>
          <p class="modal-copy">
            文章结尾那些看似中性的观察指标，比如“能安静坐满二十分钟”“对呼唤反应较慢”，
            在另一种语境里其实更接近耗竭，而不是稳定。
          </p>
        `,
      },
      {
        id: "method-19530504",
        date: "1953-05-04",
        title: "Convulsion Suite Modernisation Brings Efficiency",
        summary: "关于设备升级的技术报道，故意避开了患者体验。",
        tags: ["设备升级"],
        media: { ...mediaLibrary.theatre, caption: "Convulsion Suite", position: "48% 46%" },
        officialBody: `
          <p class="modal-copy">
            这篇技术稿对布线、时长、人员配合和室内更新讲得极细，却没有一句涉及病人如何进入、
            如何离开、如何记住这个房间。
          </p>
          <p class="modal-copy">
            这类稿件总是只记录可量化的部分，把一切感受性内容视作无关参数。
          </p>
        `,
      },
      {
        id: "method-19550819",
        date: "1955-08-19",
        title: "Review Board Notes Promise in Frontal Relief Cases",
        summary: "前额叶手术被正式写进“难治病例”讨论中，艾丽莎开始被卷入这条线。",
        tags: ["艾丽莎", "病例复审"],
        media: { ...mediaLibrary.staff, caption: "Review Board", position: "58% 26%" },
        officialBody: `
          <p class="modal-copy">
            复审委员会首次在公开语言中为 frontal relief 留出模糊位置，称其可能适用于“长期痛苦且判断功能严重紊乱”的病例。
            文中没写姓名，但儿童病区的同期复审表已经把艾丽莎列进了候选名单。
          </p>
          <p class="modal-copy">
            稿件特别强调这是一种“慎重讨论中的方向”，似乎院方仍在犹豫，但措辞里已经把外科介入提前写成了理性、克制、
            并且迟早会被证明有效的终点。
          </p>
        `,
        alteredBody: `
          <p class="modal-copy">
            <span class="success-copy">
              她不是因为“病情顽固”才被推向前额叶，而是因为多年的药物、电流与规训已经让她成了最容易被继续试下去的孩子。
            </span>
          </p>
          <p class="modal-copy">
            复审委员会并没有在她尚有别的出路时把手术视作最后选择，而是在她已经被前面那些程序削弱之后，
            把外科写成了最顺理成章的一步。
          </p>
        `,
      },
    ],
  },
  "surgery-archive": {
    title: "手术相关报道",
    intro:
      "这里收录 Theatre B、麻醉流程与前额叶手术报道。它们的语气往往最镇定，也最擅长把真正发生的事收束成几句技术语言。",
    items: [
      {
        id: "surgery-19491102",
        date: "1949-11-02",
        title: "Theatre B Sterilisation Lamps Installed",
        summary: "外科附楼设备升级，被包装成现代化医院的象征。",
        tags: ["Theatre B"],
        media: { ...mediaLibrary.theatre, caption: "Sterilisation Upgrade", position: "54% 40%" },
        officialBody: `
          <p class="modal-copy">
            外科附楼新装的无影灯、消毒灯和金属器械台，在技术稿里代表着 Blackthorn Hall 正在迈向现代化。
            文字只谈安全、效率和精确，完全不提这些设备究竟最常服务于哪类病例。
          </p>
        `,
      },
      {
        id: "surgery-19520611",
        date: "1952-06-11",
        title: "Professor Howard Presents a Model of Frontal Calm",
        summary: "霍华德把艾丽莎当作“现代额叶安定模型”推到外界面前。",
        tags: ["艾丽莎", "霍华德"],
        media: { ...mediaLibrary.theatre, caption: "Frontal Calm", position: "46% 42%" },
        officialBody: articleCatalog["19520611"].officialBody,
        alteredBody: articleCatalog["19520611"].alteredBody,
      },
      {
        id: "surgery-19540226",
        date: "1954-02-26",
        title: "Howard Leads Closed Seminar on Minor Frontal Access",
        summary: "一篇只面对医学圈的报道，把外科侵入写得像细致调整。",
        tags: ["艾丽莎", "内部讲座"],
        media: { ...mediaLibrary.staff, caption: "Closed Seminar", position: "62% 24%" },
        officialBody: `
          <p class="modal-copy">
            这篇内部转录稿把 frontal access 描述成“小范围、低负担、可逆向评估的技术路径”，
            语气极其冷静，像讨论一处器械校准而不是儿童脑组织。
          </p>
          <p class="modal-copy">
            同天的排班表却显示，艾丽莎被安排进了术前准备室。
          </p>
        `,
        alteredBody: `
          <p class="modal-copy">
            <span class="success-copy">
              “Minor” 只是对外的词。她每次被推出 Theatre B，都会比进去时更安静，也更远。
            </span>
          </p>
          <p class="modal-copy">
            那种“更远”并不总能立刻被量表记录出来，但护理栏开始频繁出现她对熟悉物件辨认迟缓、对同一问题回答断裂的记号。
            这些内容没有进入讲座摘要，因为它们会让“低负担”显得过于苍白。
          </p>
        `,
      },
      {
        id: "surgery-19560708",
        date: "1956-07-08",
        title: "Anaesthetic Precision Highlighted in Juvenile Theatre",
        summary: "关于麻醉稳定性的宣传稿，后来成了最难被忽视的一处疑点。",
        tags: ["艾丽莎", "麻醉"],
        media: { ...mediaLibrary.theatre, caption: "Anaesthetic Sheet", position: "60% 50%" },
        officialBody: `
          <p class="modal-copy">
            宣传稿自豪地写道，Theatre B 在 juvenile theatre 的麻醉控制已经“足够精确”，
            可以让术后躁动被严格压缩到最小范围。
          </p>
          <p class="modal-copy">
            整篇稿件几乎像一份技术广告，详细列出剂量、时间窗、苏醒秩序和术后观察表格，
            却不问那些表格里到底记录着怎样的孩子。
          </p>
        `,
        alteredBody: `
          <p class="modal-copy">
            <span class="success-copy">
              她的“躁动消失”常常发生在麻药计量超标之后，迟缓、失真与断片被整齐地归档成了平稳恢复。
            </span>
          </p>
          <p class="modal-copy">
            手术日志里最需要追问的从来不是她有没有安静下来，而是她每次安静下来之后，
            究竟还有多少属于自己的反应被一起带走了。
          </p>
        `,
      },
      {
        id: "surgery-19571218",
        date: "1957-12-18",
        title: "Difficult Winter Procedure Completes Without Incident",
        summary: "这是官方对艾丽莎最后一次手术留下的正向版本。",
        tags: ["艾丽莎", "终局"],
        media: { ...mediaLibrary.theatre, caption: "Winter Procedure", position: "44% 34%" },
        officialBody: `
          <p class="modal-copy">
            新闻稿称，一次困难但成功的 winter procedure 让长期受苦的年轻病例终于获得了稳定机会。
            报道用“without incident”四个字，把所有真正该问的问题统统关在门外。
          </p>
          <p class="modal-copy">
            文末还说，术后恢复在“经验丰富的看护与严格的安静程序”下进行，仿佛这只是一场需要多休息几周的普通治疗。
            甚至连季节也被利用了: 冬天本就适合解释苍白、沉默和长时间卧床。
          </p>
        `,
        alteredBody: `
          <p class="modal-copy">
            <span class="success-copy">
              1957 年冬天，艾丽莎死在了这台前额叶手术上。所谓“无事发生”，只是因为再也没有人被允许谈论手术室里发生过什么。
            </span>
          </p>
          <p class="modal-copy">
            她没有被写进死亡稿，没有被允许在病房名册上留下完整结束语，只在后续每一篇成功报道里
            以缺席的方式继续出现。那四个字真正保护的不是手术，而是医院的外壳。
          </p>
        `,
      },
      {
        id: "surgery-19580106",
        date: "1958-01-06",
        title: "Post-operative Calm Continues Under Close Supervision",
        summary: "术后进展稿里已经看不见病人，只剩语言上的成功感。",
        tags: ["艾丽莎", "莉娜"],
        media: { ...mediaLibrary.ward, caption: "Post-operative Ward", position: "64% 54%" },
        officialBody: `
          <p class="modal-copy">
            术后周报把病人写成“继续平静”“配合进食”“对护理有反应”，却没有任何直接引语。
            这是一篇没有人脸、没有声音、只剩指标的成功稿。
          </p>
        `,
        alteredBody: `
          <p class="modal-copy">
            <span class="success-copy">
              因为真正的病人已经不在了，病房里被训练的是另一个身形相近的女孩，名字叫莉娜。
            </span>
          </p>
          <p class="modal-copy">
            她被要求记住几个固定回答，学会在问到睡眠、食欲和感谢时露出适度神情。
            手术后的“平静延续”之所以看起来无懈可击，是因为它从那时起已经不再属于同一个人。
          </p>
        `,
      },
    ],
  },
  achievements: {
    title: "医学成就报道",
    intro:
      "最体面的稿件都在这里: 捐助、协会认可、媒体回访和成功案例。艾丽莎后来也是在这一层里被彻底伪造成“成功”。",
    items: [
      {
        id: "achieve-19480305",
        date: "1948-03-05",
        title: "Blackthorn Cited for Integrating Veteran and Civilian Care",
        summary: "对外声誉稿，强调医院已成功完成从军人机构到公共医院的过渡。",
        tags: ["声誉宣传"],
        media: { ...mediaLibrary.staff, caption: "Committee Visit", position: "50% 30%" },
        officialBody: `
          <p class="modal-copy">
            捐助方称赞 Blackthorn Hall 成功整合退伍军人与平民住院体系，能在同一机构内完成观察、恢复和长期管理。
            这类稿子总把扩张写成能力，而不谈扩张后到底是谁承受了更多介入。
          </p>
        `,
      },
      {
        id: "achieve-19510122",
        date: "1951-01-22",
        title: "Howard Receives Society Mention for Behavioural Calm Studies",
        summary: "霍华德在医学协会内部获得表彰，额叶安定理论开始出圈。",
        tags: ["霍华德"],
        media: { ...mediaLibrary.staff, caption: "Society Mention", position: "64% 24%" },
        officialBody: `
          <p class="modal-copy">
            协会表彰稿把霍华德描绘成冷静而前沿的研究者，认为他的 calm studies 为复杂病例提供了新方向。
            这些“方向”后来几乎都流向了 Theatre B。
          </p>
        `,
      },
      {
        id: "achieve-19531114",
        date: "1953-11-14",
        title: "Nurse Jenny's Ward Notes Admired by Charitable Board",
        summary: "珍妮的护理笔记被作为儿童病区温柔管理的范例展示。",
        tags: ["珍妮"],
        media: { ...mediaLibrary.staff, caption: "Ward Notes", position: "42% 24%" },
        officialBody: `
          <p class="modal-copy">
            捐助委员会展示了珍妮的护理笔记摘抄，称她能把惊恐儿童一步步带回秩序。
            公开版本只选了最柔和的段落，没有人看见她在空白边缘留下过多少改正与迟疑。
          </p>
        `,
      },
      {
        id: "achieve-19550930",
        date: "1955-09-30",
        title: "Regional Press Praises Recovery Metrics in Child Psychiatry",
        summary: "儿童恢复率被写进地区性宣传稿，艾丽莎开始被默认为统计亮点。",
        tags: ["艾丽莎", "统计宣传"],
        media: { ...mediaLibrary.ward, caption: "Recovery Metrics", position: "56% 44%" },
        officialBody: `
          <p class="modal-copy">
            地区报纸把 Blackthorn Hall 的儿童恢复率写成了难得的现代成功案例。艾丽莎虽然未被全名提及，
            却在多处描述中被默认成“最有代表性的长程改善病例”。
          </p>
        `,
        alteredBody: `
          <p class="modal-copy">
            <span class="success-copy">
              指标里只计算“仍可展示”的孩子，不计算在治疗中消失、死去或被改名的人。
            </span>
          </p>
          <p class="modal-copy">
            那些被抹掉的病例并不会让报表更凌乱，只会让成功率更整齐。数字之所以好看，
            正因为有人被提前从数字里拿走了。
          </p>
        `,
      },
      {
        id: "achieve-19580203",
        date: "1958-02-03",
        title: "Recovered Elisa Greets Winter Press Delegation",
        summary: "艾丽莎被正式推到外界面前，成为手术成功的招牌案例。",
        tags: ["艾丽莎", "莉娜"],
        media: { ...mediaLibrary.staff, caption: "Winter Press Visit", position: "52% 30%" },
        officialBody: articleCatalog["19580203"].officialBody,
        alteredBody: articleCatalog["19580203"].alteredBody,
      },
      {
        id: "achieve-19580416",
        date: "1958-04-16",
        title: "Visiting Committee Hails Blackthorn's Most Public Success",
        summary: "最后一批正向宣传稿把“成功案例”彻底钉死成外界记忆。",
        tags: ["莉娜"],
        media: { ...mediaLibrary.staff, caption: "Committee Portrait", position: "60% 34%" },
        officialBody: `
          <p class="modal-copy">
            访问委员会在离院总结中，把一位“能与访客自然交谈的年轻女孩”写成了 Blackthorn Hall 最有说服力的成功例子。
            她的笑、她的站姿、她对问题的短促回答，都被拍成了最方便传播的结尾。
          </p>
        `,
        alteredBody: `
          <p class="modal-copy">
            <span class="success-copy">
              她背的是艾丽莎的故事，穿的是艾丽莎的外套，但她是莉娜。
            </span>
          </p>
          <p class="modal-copy">
            访问委员会记住的是一张安静的脸，而不是脸后面的名字。等这篇稿子刊出时，
            艾丽莎已经不需要再被解释了，医院只需要一位看起来能让所有人安心离开的孩子。
          </p>
        `,
      },
    ],
  },
};

const inventoryCatalog = {
  credential: {
    name: "馆藏凭证",
    description: () => "由 admissions terminal 吐出的旧 staff token，可继续进入内部目录层。",
  },
  seal: {
    name: "Theatre B 封签",
    description: () => "重建治疗索引后掉出的内部封签，说明你已经接近手术记录。",
  },
  snapshot: {
    name: "页面快照",
    description: () => "你保留了一份媒体报道的旧缓存，足够与当前版本逐段对照。",
  },
};

const clueCatalog = {
  civilianYear: {
    title: "平民开放年份",
    description: "Admissions charter 在 1947 年修订，医院开始接收普通民众。",
  },
  closureRumour: {
    title: "停运外部猜测",
    description: "媒体长期怀疑 Blackthorn Hall 于 1958 年关闭，与其激进疗法受到人道主义者指责有关。",
  },
  sequence: {
    title: "治疗升级顺序",
    description: "批评文章写得很直接: 从镇静，到电流，再到前额叶手术。",
  },
  prefrontal: {
    title: "封存索引词",
    description: "院长页暗藏批注: operative ledgers are filed under PREFRONTAL, never under lobotomy.",
  },
  editorTrace: {
    title: "页面被改写",
    description: "你缓存过的报道与当前版本不一致，存在第二个正在改页的操作者。",
  },
  date1946: {
    title: "日期线索 I",
    description: "未署名操作者留下了第一个日期: 1946-03-19。",
  },
  date1952: {
    title: "日期线索 II",
    description: "第二个日期是 1952-06-11，对方依旧不肯直接回答问题。",
  },
  date1958: {
    title: "日期线索 III",
    description: "第三个日期是 1958-02-03，像是把最后的入口推到了你手里。",
  },
  elisaOrigin: {
    title: "艾丽莎的来历",
    description: "艾丽莎是二战犹太遗孤，家人全部死于集中营，7 岁时被送入 Blackthorn Hall。",
  },
  howardPast: {
    title: "霍华德的家族背景",
    description: "霍华德家族曾是狂热的纳粹支持者，而他本人因英国国籍未受追究。",
  },
  anaesthesia: {
    title: "症状来源疑点",
    description: "所谓“精神分裂”更像多次术后麻药计量超标留下的后遗症，而非原发病症。",
  },
  lenaSwap: {
    title: "莉娜替代",
    description: "1957 年冬天艾丽莎死于手术，后续媒体来访由身形相近的莉娜替代出镜。",
  },
};

const dom = {
  appShell: document.querySelector(".app-shell"),
  intro: document.querySelector("#intro-screen"),
  game: document.querySelector("#game-shell"),
  ending: document.querySelector("#ending-screen"),
  endingCard: document.querySelector("#ending-card"),
  startButton: document.querySelector("#start-button"),
  replayButton: document.querySelector("#replay-button"),
  resetButton: document.querySelector("#reset-button"),
  hintButton: document.querySelector("#hint-button"),
  archiveSearchInput: document.querySelector("#archive-search-input"),
  archiveSearchButton: document.querySelector("#archive-search-button"),
  archiveSearchHint: document.querySelector("#archive-search-hint"),
  objectiveText: document.querySelector("#objective-text"),
  inventoryList: document.querySelector("#inventory-list"),
  clueList: document.querySelector("#clue-list"),
  logList: document.querySelector("#log-list"),
  archiveStatus: document.querySelector("#archive-status"),
  traceStatus: document.querySelector("#trace-status"),
  modalBackdrop: document.querySelector("#modal-backdrop"),
  modalTitle: document.querySelector("#modal-title"),
  modalBody: document.querySelector("#modal-body"),
  modalClose: document.querySelector("#modal-close"),
  portalButtons: Array.from(document.querySelectorAll(".portal-card")),
  heroLinkButtons: Array.from(document.querySelectorAll(".hero-link-button")),
  railButtons: Array.from(document.querySelectorAll(".rail-link-button, .rail-section-button")),
};

const storyHighlights = [
  { pattern: /艾丽莎/g, className: "story-beat" },
  { pattern: /霍华德/g, className: "story-beat" },
  { pattern: /珍妮/g, className: "story-beat-soft" },
  { pattern: /莉娜/g, className: "story-beat" },
  { pattern: /Leah/g, className: "story-beat-soft" },
  { pattern: /Theatre B/g, className: "story-beat" },
  { pattern: /J\.M\./g, className: "story-beat-soft" },
  { pattern: /前额叶切除术/g, className: "story-beat" },
  { pattern: /prefrontal leucotomy/g, className: "story-beat" },
  { pattern: /PREFRONTAL/g, className: "story-beat" },
  { pattern: /犹太遗孤/g, className: "story-beat-soft" },
  { pattern: /集中营/g, className: "story-beat-soft" },
  { pattern: /麻药计量超标/g, className: "story-beat" },
];

const pageSearchEntries = [
  {
    id: "page-history",
    type: "page",
    target: "history",
    title: "医院沿革",
    summary: "1919 建院、二战扩建、1958 停运的时间线。",
    keywords: ["历史", "沿革", "停运", "1919", "1958", "二战", "一战"],
  },
  {
    id: "page-admissions",
    type: "page",
    target: "admissions",
    title: "接收政策",
    summary: "1947 年向普通民众开放前后的收治制度。",
    keywords: ["接收", "开放", "1947", "民众", "军人", "收治"],
  },
  {
    id: "page-facilities",
    type: "page",
    target: "facilities",
    title: "医院设施",
    summary: "病房、水疗室、果园步道与地下档案库。",
    keywords: ["设施", "病房", "水疗", "档案库", "theatre b", "地下"],
  },
  {
    id: "page-staff",
    type: "page",
    target: "staff",
    title: "医护人员",
    summary: "霍华德、珍妮与其他核心医护档案。",
    keywords: ["医护", "医生", "护士", "霍华德", "珍妮", "j.m.", "jenny", "howard"],
  },
  {
    id: "page-director",
    type: "page",
    target: "director",
    title: "院长介绍",
    summary: "Hargreaves 的安定理论与索引词线索。",
    keywords: ["院长", "hargreaves", "prefontal", "prefrontal", "索引词"],
  },
  {
    id: "page-press",
    type: "page",
    target: "press",
    title: "媒体报道",
    summary: "最早出现外部质疑与页面错位的栏目。",
    keywords: ["媒体", "报道", "页面", "错位", "改写", "舆论"],
  },
  {
    id: "page-treatment",
    type: "page",
    target: "treatment",
    title: "治疗目录",
    summary: "镇静、电流与前额叶手术的升级顺序。",
    keywords: ["治疗", "手段", "电流", "镇静", "前额叶", "脑前额叶", "手术"],
  },
  {
    id: "page-theatre",
    type: "page",
    target: "theatre",
    title: "Theatre B 封存记录",
    summary: "与前额叶切除术和术后记录相关的核心封存页。",
    keywords: ["theatre b", "手术", "前额叶", "封存", "外科", "脑前额叶"],
  },
  {
    id: "page-daily-care",
    type: "page",
    target: "daily-care",
    title: "日常看护报道",
    summary: "艾丽莎最早以恢复中的孩子身份出现的报道库。",
    keywords: ["日常", "看护", "艾丽莎", "儿童病房", "病房生活"],
  },
  {
    id: "page-methods",
    type: "page",
    target: "methods",
    title: "治疗手段报道",
    summary: "休息疗法、电流疗法与胰岛素方案。",
    keywords: ["治疗", "电流", "胰岛素", "前额叶", "艾丽莎", "脑前额叶"],
  },
  {
    id: "page-surgery",
    type: "page",
    target: "surgery-archive",
    title: "手术相关报道",
    summary: "Theatre B、麻醉与前额叶手术时间线。",
    keywords: ["手术", "theatre b", "麻醉", "前额叶", "霍华德", "艾丽莎", "脑前额叶"],
  },
  {
    id: "page-achievements",
    type: "page",
    target: "achievements",
    title: "医学成就报道",
    summary: "宣传稿、统计亮点与伪造的成功案例。",
    keywords: ["成就", "宣传", "艾丽莎", "莉娜", "霍华德", "珍妮", "成功案例"],
  },
  {
    id: "page-search",
    type: "page",
    target: "search",
    title: "日期报道检索",
    summary: "输入日期查看当天刊出的医院报道。",
    keywords: ["日期", "检索", "19460319", "19520611", "19580203"],
  },
  {
    id: "page-dossier",
    type: "page",
    target: "dossier",
    title: "艾丽莎档案拼接",
    summary: "把公开档案与另一套叙述拼回一条完整时间线。",
    keywords: ["艾丽莎", "莉娜", "珍妮", "j.m.", "真相", "拼接"],
  },
];

const IDENTITY_QUERY = "你是谁";
const IDENTITY_WARNING_COUNT = 6;
const intactTargets = new Set([
  "daily-care",
  "methods",
  "surgery-archive",
  "achievements",
  "theatre",
  "dossier",
  "search",
]);

function createInitialState() {
  return {
    inventory: [],
    clues: [],
    logs: [
      "你已进入 Blackthorn Hall Hospital 官方档案重建站。",
      "Dr. Lydia Mercer 正在追索与 prefrontal leucotomy 有关的封存记录。",
    ],
    flags: {
      started: false,
      historySeen: false,
      admissionsSeen: false,
      facilitiesSeen: false,
      staffSeen: false,
      pressSeen: false,
      directorSeen: false,
      directorNoteKnown: false,
      terminalUnlocked: false,
      treatmentSolved: false,
      theatreUnlocked: false,
      dailyCareSeen: false,
      methodsSeen: false,
      surgerySeen: false,
      achievementsSeen: false,
      revisionSeen: false,
      truthUnlocked: false,
      breachMode: false,
      leahRevealed: false,
    },
    sequenceProgress: [],
    conversationStage: 0,
    resolvedArticles: [],
    viewedArticles: [],
    alteredArticles: [],
    identitySearchCount: 0,
    breachPulse: 0,
    leahChatStarted: false,
    leahChatStage: 0,
    leahChatHistory: [],
    endingMode: null,
    currentModalType: null,
  };
}

let state = createInitialState();
let breachIntervalId = null;

function boot() {
  dom.startButton.addEventListener("click", startGame);
  if (dom.replayButton) {
    dom.replayButton.addEventListener("click", resetGame);
  }
  dom.resetButton.addEventListener("click", resetGame);
  dom.hintButton.addEventListener("click", showHint);
  dom.archiveSearchButton.addEventListener("click", handleArchiveSearch);
  dom.archiveSearchInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      handleArchiveSearch();
    }
  });
  dom.modalClose.addEventListener("click", closeModal);
  dom.modalBackdrop.addEventListener("click", (event) => {
    if (event.target === dom.modalBackdrop) {
      closeModal();
    }
  });

  dom.portalButtons.forEach((button) => {
    const kicker = button.querySelector(".portal-kicker");
    const title = button.querySelector("strong");
    const summary = button.querySelector("p");

    if (kicker) {
      button.dataset.originalKicker = kicker.textContent;
    }
    if (title) {
      button.dataset.originalTitle = title.textContent;
    }
    if (summary) {
      button.dataset.originalSummary = summary.textContent;
    }

    button.addEventListener("click", () => {
      inspectTarget(button.dataset.target);
    });
  });

  dom.heroLinkButtons.forEach((button) => {
    button.addEventListener("click", () => {
      inspectTarget(button.dataset.target);
    });
  });

  dom.railButtons.forEach((button) => {
    button.addEventListener("click", () => {
      inspectTarget(button.dataset.target);
    });
  });

  render();
}

function startGame() {
  state.flags.started = true;
  dom.intro.classList.add("hidden");
  dom.game.classList.remove("hidden");
  addLog("公开介绍页加载完成，某些条目看起来被刻意修饰过。");
  render();
}

function resetGame() {
  stopBreachTicker();
  state = createInitialState();
  closeModal();
  dom.ending.classList.add("hidden");
  dom.game.classList.add("hidden");
  dom.intro.classList.remove("hidden");
  render();
}

function render() {
  syncBreachTicker();
  document.body.classList.toggle("breach-mode", state.flags.breachMode);
  dom.appShell.classList.toggle("breach-mode", state.flags.breachMode);
  dom.objectiveText.textContent = getObjectiveText();
  dom.archiveStatus.textContent = getArchiveStatus();
  dom.traceStatus.textContent = getTraceStatus();
  dom.archiveSearchHint.textContent = getSearchHintText();

  renderInventory();
  renderClues();
  renderLogs();
  renderPortals();

  renderEndingScreen();
}

function renderInventory() {
  if (state.inventory.length === 0) {
    dom.inventoryList.innerHTML = `
      <li class="empty-item">
        <strong>未取得权限</strong>
        <span>目前还没有任何 staff credential、内部封签或缓存快照落到你手里。</span>
      </li>
    `;
    return;
  }

  dom.inventoryList.innerHTML = state.inventory
    .map((itemId) => {
      const item = inventoryCatalog[itemId];
      return `
        <li class="card-item">
          <strong>${item.name}</strong>
          <span>${item.description()}</span>
        </li>
      `;
    })
    .join("");
}

function renderClues() {
  if (state.clues.length === 0) {
    dom.clueList.innerHTML = `
      <li class="empty-item">
        <strong>研究笔记为空</strong>
        <span>先从接收政策、媒体报道和院长介绍页里找关键线索。</span>
      </li>
    `;
    return;
  }

  dom.clueList.innerHTML = state.clues
    .map((clueId) => {
      const clue = clueCatalog[clueId];
      return `
        <li class="card-item">
          <strong>${clue.title}</strong>
          <span>${clue.description}</span>
        </li>
      `;
    })
    .join("");
}

function renderLogs() {
  dom.logList.innerHTML = [...state.logs]
    .slice(-8)
    .reverse()
    .map((entry) => `<li class="log-item">${entry}</li>`)
    .join("");
}

function renderPortals() {
  const resolvedCount = state.resolvedArticles.length;
  const portalStates = {
    history: state.flags.historySeen ? "done" : "active",
    admissions: state.flags.admissionsSeen ? "done" : "active",
    facilities: state.flags.facilitiesSeen ? "done" : "active",
    staff: state.flags.staffSeen ? "done" : "active",
    director: state.flags.directorNoteKnown
      ? "done"
      : state.flags.treatmentSolved || state.flags.directorSeen
        ? "active"
        : "idle",
    press: state.flags.revisionSeen ? "done" : state.flags.pressSeen ? "active" : "active",
    terminal: state.flags.terminalUnlocked ? "done" : "active",
    treatment: state.flags.treatmentSolved
      ? "done"
      : state.flags.terminalUnlocked && state.flags.pressSeen
        ? "active"
        : "locked",
    "daily-care": state.flags.dailyCareSeen ? "done" : "active",
    methods: state.flags.methodsSeen ? "done" : "active",
    "surgery-archive": state.flags.surgerySeen ? "done" : "active",
    achievements: state.flags.achievementsSeen ? "done" : "active",
    theatre: state.flags.theatreUnlocked
      ? "done"
      : state.flags.treatmentSolved
        ? "active"
        : "locked",
    revision: state.flags.revisionSeen
      ? "done"
      : state.flags.theatreUnlocked
        ? "active"
        : "locked",
    exchange: state.conversationStage >= datePrompts.length
      ? "done"
      : state.flags.revisionSeen
        ? "active"
        : "locked",
    search: resolvedCount >= 3
      ? "done"
      : state.conversationStage > 0
        ? "active"
        : "locked",
    dossier: state.flags.truthUnlocked
      ? "done"
      : resolvedCount >= 3
        ? "active"
        : "locked",
  };

  dom.portalButtons.forEach((button) => {
    button.dataset.state = portalStates[button.dataset.target] || "idle";
    const isIntact = isIntactTarget(button.dataset.target);
    button.classList.toggle("intact-page", isIntact);
    button.classList.toggle(
      "breach-page",
      state.flags.breachMode && !isIntact,
    );
    renderPortalCopy(button, state.flags.breachMode && !isIntact);
  });
}

function handleArchiveSearch() {
  const query = dom.archiveSearchInput.value.trim();
  const normalizedQuery = normalizeSearchText(query);

  if (
    state.flags.breachMode &&
    state.resolvedArticles.length >= 3 &&
    containsAllCoreDates(query)
  ) {
    openLeahRecord();
    return;
  }

  if (normalizedQuery === normalizeSearchText(IDENTITY_QUERY)) {
    handleIdentityQuery();
    return;
  }

  if (!query) {
    openModal(
      "档案检索",
      `
        <p class="modal-copy">
          输入一个日期或关键词再检索。比如 <span class="success-copy">艾丽莎</span>、
          <span class="success-copy">霍华德</span>、<span class="success-copy">手术</span>、
          <span class="success-copy">脑前额叶</span> 或 <span class="success-copy">1952-06-11</span>。
        </p>
      `,
    );
    return;
  }

  const results = performArchiveSearch(query);
  showArchiveSearchResults(query, results);
}

function handleIdentityQuery() {
  if (state.identitySearchCount === 0) {
    state.identitySearchCount = 1;
    openIdentityWarning(0);
    return;
  }

  if (!state.flags.breachMode) {
    state.identitySearchCount += 1;
    state.flags.breachMode = true;
    addLog("档案像突然意识到自己被问到了不该存在的问题。");
    render();
    openModal(
      "",
      `
        <p class="modal-copy corruption-copy">
          你不需要知道这些。
        </p>
      `,
    );
    return;
  }

  openModal(
    "",
    `
      <p class="modal-copy corruption-copy">
        你不需要知道这些。
      </p>
    `,
  );
}

function openIdentityWarning(index) {
  openModal(
    "",
    `
      <div class="warning-stack">
        <p class="modal-copy warning-copy">你不需要知道这些。</p>
        <div class="code-row">
          <button class="modal-button" id="identity-warning-confirm">确认</button>
        </div>
      </div>
    `,
  );

  document
    .querySelector("#identity-warning-confirm")
    .addEventListener("click", () => {
      const delay = Math.max(70, 340 - index * 42);
      if (index + 1 < IDENTITY_WARNING_COUNT) {
        const button = document.querySelector("#identity-warning-confirm");
        button.disabled = true;
        button.textContent = "…";
        setTimeout(() => {
          openIdentityWarning(index + 1);
        }, delay);
        return;
      }

      closeModal();
      render();
    });
}

function performArchiveSearch(query) {
  const searchTokens = buildSearchTokens(query);
  const entries = buildSearchEntries();

  return entries
    .filter((entry) => matchesSearchEntry(entry, searchTokens))
    .sort((left, right) => {
      if (left.score !== right.score) {
        return right.score - left.score;
      }

      const leftDate = left.date ? normalizeDate(left.date) : "";
      const rightDate = right.date ? normalizeDate(right.date) : "";
      return rightDate.localeCompare(leftDate);
    })
    .slice(0, 12);
}

function showArchiveSearchResults(query, results) {
  if (results.length === 0) {
    openModal(
      "档案检索",
      `
        <p class="modal-copy">
          没有找到和 <span class="success-copy">${query}</span> 对应的档案条目。
        </p>
        <p class="inline-note">
          你可以尝试人物名、日期、病区名，或像“手术”“脑前额叶”“珍妮”这样的关键词。
        </p>
      `,
    );
    return;
  }

  openModal(
    "档案检索",
    `
      <p class="modal-copy">
        与 <span class="success-copy">${query}</span> 相关的条目如下。
      </p>
      <div class="library-grid">
        ${results
          .map(
            (entry) => {
              const intact = !state.flags.breachMode || isIntactSearchEntry(entry);
              return `
              <button
                class="library-button ${intact ? "" : "search-result-corrupt"}"
                data-search-type="${entry.type}"
                data-search-id="${entry.id}"
              >
                <span class="library-topline">${intact ? entry.label : corruptText(entry.label, 0.18)}</span>
                <strong>${intact ? entry.title : corruptText(entry.title, 0.26)}</strong>
                <p class="library-summary">${intact ? entry.summary : corruptText(entry.summary, 0.22)}</p>
              </button>
            `;
            },
          )
          .join("")}
      </div>
    `,
  );

  document.querySelectorAll("[data-search-type]").forEach((button) => {
    button.addEventListener("click", () => {
      const result = results.find((entry) => entry.id === button.dataset.searchId);
      if (result) {
        openSearchEntry(result);
      }
    });
  });
}

function openSearchEntry(entry) {
  closeModal();

  if (entry.type === "page") {
    if (state.flags.breachMode && !isIntactTarget(entry.target)) {
      openCorruptedPage(entry.target);
      return;
    }
    inspectTarget(entry.target);
    return;
  }

  if (entry.type === "record") {
    const record = findArchiveRecord(entry.recordKind, entry.recordId);
    if (record) {
      if (state.flags.breachMode && !isIntactRecord(record, entry.recordKind)) {
        openCorruptedPage(record.title);
        return;
      }
      openArchiveRecord(record, entry.recordKind);
    }
    return;
  }
}

function buildSearchEntries() {
  const entries = pageSearchEntries.map((entry) => ({
    ...entry,
    label: "栏目页",
    searchableText: normalizeSearchText(
      [entry.title, entry.summary, entry.keywords.join(" ")].join(" "),
    ),
    score: 0,
  }));

  facilityFeatures.forEach((record) => {
    entries.push(
      createRecordSearchEntry(record, "facility", "设施条目", [
        "设施",
        "病房",
        "花园",
        "档案库",
      ]),
    );
  });

  getVisibleStaffProfiles().forEach((record) => {
    entries.push(
      createRecordSearchEntry(record, "staff", "人物档案", [
        "医护",
        "医生",
        "护士",
        "人物",
      ]),
    );
  });

  Object.values(reportArchives).forEach((archive) => {
    archive.items.forEach((record) => {
      entries.push(
        createRecordSearchEntry(record, "report", archive.title, [
          archive.title,
          archive.intro,
        ]),
      );
    });
  });

  return entries;
}

function createRecordSearchEntry(record, recordKind, label, extraKeywords) {
  const content = [
    record.title,
    record.summary,
    record.date,
    record.tags ? record.tags.join(" ") : "",
    extraKeywords.join(" "),
    stripHtml(record.officialBody || record.bodyHtml || ""),
    stripHtml(record.alteredBody || ""),
  ].join(" ");

  return {
    id: `search-${recordKind}-${record.id}`,
    type: "record",
    recordKind,
    recordId: record.id,
    title: record.title,
    summary: record.summary,
    date: record.date,
    label,
    searchableText: normalizeSearchText(content),
    score: 0,
  };
}

function matchesSearchEntry(entry, searchTokens) {
  let score = 0;

  searchTokens.forEach((token) => {
    if (!token) {
      return;
    }

    if (entry.searchableText.includes(token)) {
      score += token.length >= 6 ? 4 : 2;
    }

    if (entry.date && normalizeDate(entry.date) === token) {
      score += 8;
    }
  });

  entry.score = score;
  return score > 0;
}

function buildSearchTokens(query) {
  const raw = query.toLowerCase().trim();
  const normalized = normalizeSearchText(query);
  const dateToken = normalizeDate(query);
  const tokens = new Set([normalized, dateToken]);

  const aliasMap = {
    艾丽莎: ["elisa", "儿童病房", "1957", "1958"],
    霍华德: ["howard", "arthur", "前额叶", "手术"],
    珍妮: ["jenny", "j.m.", "护理", "儿童病房"],
    leah: ["儿童心理专家", "员工介绍", "staff", "leah", "心理专家"],
    莉娜: ["lena", "1958", "采访"],
    手术: ["theatreb", "前额叶", "外科", "麻醉"],
    脑前额叶: ["前额叶", "前额叶切除术", "prefrontal", "leucotomy"],
    前额叶: ["前额叶切除术", "prefrontal", "theatreb"],
    日期: ["19460319", "19520611", "19580203"],
    theatreb: ["theatre", "手术", "前额叶"],
  };

  Object.entries(aliasMap).forEach(([key, values]) => {
    if (raw.includes(key) || normalized.includes(normalizeSearchText(key))) {
      values.forEach((value) => tokens.add(normalizeSearchText(value)));
    }
  });

  return [...tokens].filter(Boolean);
}

function inspectTarget(target) {
  if (state.flags.breachMode && !isIntactTarget(target)) {
    openCorruptedPage(target);
    return;
  }

  const handlers = {
    "medical-news": inspectMedicalNews,
    "psych-tests": inspectPsychTests,
    forum: inspectForum,
    history: inspectHistory,
    admissions: inspectAdmissions,
    facilities: inspectFacilities,
    staff: inspectStaff,
    director: inspectDirector,
    press: inspectPress,
    terminal: inspectTerminal,
    treatment: inspectTreatment,
    "daily-care": inspectDailyCare,
    methods: inspectMethods,
    "surgery-archive": inspectSurgeryArchive,
    achievements: inspectAchievements,
    theatre: inspectTheatre,
    revision: inspectRevision,
    exchange: inspectExchange,
    search: inspectSearch,
    dossier: inspectDossier,
  };

  const handler = handlers[target];
  if (handler) {
    handler();
  }
}

function inspectMedicalNews() {
  openArchiveLibrary(
    "医学新闻",
    `
      <p class="modal-copy">
        如果把 Blackthorn Hall 的整套首页当成一个千禧年门户站，那么“医学新闻”就是最像门户频道中心的那一栏。
        这里会把本来分属不同系统的内容并排放在一起: 护理纪要、疗法介绍、手术报道、协会表彰、统计宣传，
        都被改写成一种看似中立、实则高度经过筛选的机构口吻。它不直接承认医院在做什么，却不断通过“进展”“改善”
        “稳定”“顺从”“适应”等词，把那些原本应该引发质疑的过程包装成现代医学不断前进的证据。
      </p>
      <p class="modal-copy">
        这一栏最值得注意的地方，不是某一篇稿件写得多么离谱，而是整组稿件如何彼此抬轿。日常看护稿先把病房塑造成温和的恢复空间，
        治疗手段稿再把升级介入写成自然延伸，手术稿则用最镇定的技术语言替代一切情绪性的描述，最后医学成就稿再回头宣布成果，
        仿佛每一步都被前一步顺理成章地证明了。也就是说，真正起作用的并不只是某次电流或某次手术，而是整套舆论结构:
        先告诉外界这里是安全的，再告诉外界这里是必要的，最后告诉外界这里是成功的。
      </p>
      <p class="modal-copy">
        艾丽莎相关报道之所以会在这一栏里显得格外刺眼，正因为她几乎穿过了整条链路。她先被放进护理故事里，成为“会重新说话的孩子”；
        又被写进治疗手段里，成为“能安静下来的病例”；再被推上手术报道，成为“现代额叶安定”的样板；最后被抬进成就宣传，
        成为足以打动来访记者和捐助委员会的“成功案例”。如果不把这些稿子连在一起看，外人很容易误以为每一篇都只是在记录某一个阶段；
        可一旦把它们并排，才会看见同一个孩子如何被持续改写、持续消音，最后甚至被另一个人替代。
      </p>
      <p class="modal-copy">
        医学新闻频道还有一个更隐蔽的功能: 它替医院建立了一种公众熟悉感。早期门户站的用户习惯于相信频道化的信息结构，
        觉得只要内容被整齐地分在“新闻”“健康”“成就”“论坛”这些板块里，就天然更可靠。Blackthorn Hall 恰恰利用了这一点。
        它把病区、手术室、儿童观察寝室和统计数字拆散，放进不同的语境里，让读者每次只接触其中一小块，从而避免在同一页面上
        直接撞见真正的全貌。于是，一个本该令人不安的制度就这样被切割成许多看起来各自合理的小栏目。
      </p>
      <p class="modal-copy">
        所以下面的条目并不只是“医院新闻”，更像是整套叙事机器的零件库。你读到的不是单篇报道，而是医院如何一步步替自己塑造形象、
        替患者命名、替外界准备解释的过程。真正重要的往往不是标题本身，而是同一组词如何在不同年份、不同栏目里反复出现:
        calm, order, improved, recovered, suitable, relieved。等到这些词被写得足够多以后，任何不合逻辑的结论看起来都会像迟来的常识。
      </p>
    `,
    [
      ...reportArchives["daily-care"].items.slice(0, 2),
      ...reportArchives.methods.items.slice(0, 2),
      ...reportArchives["surgery-archive"].items.slice(0, 2),
      ...reportArchives.achievements.items.slice(0, 2),
    ],
    "report",
  );
}

function inspectPsychTests() {
  openModal(
    "心理测试",
    `
      <p class="modal-copy">
        “心理测试”这一栏，是整个主页里最具有千禧年互联网伪装感的一块。把它放在首页左侧，看起来就像当年门户网站会放的
        “自测”“问卷”“人格倾向”“情绪指数”之类的小工具，既亲切、又低门槛，仿佛任何访客都能点进去看看自己属于哪一种人。
        但在 Blackthorn Hall 这套档案站里，所谓测试从来不只是面向访客的内容，它更像把院内评估制度伪装成公共服务界面的方式。
        外部读者看见的是表单、指标和分项说明，院内真正运作的却是分类、处置和路径分流。
      </p>
      <p class="modal-copy">
        这些量表之所以危险，不在于它们看起来有多粗暴，恰恰在于它们过于温和。一个孩子是否夜间惊醒、是否愿意开口、是否能按顺序吃完餐食，
        一个成年人是否持续沉默、是否拒绝眼神接触、是否对统一作息产生明显抵触，这些本来可以被理解为处境、创伤、羞耻或恐惧的反应，
        一旦被写进量表，立刻就会变成“评分项”。而一旦变成评分项，它们就会自动进入后续制度链条: 先被记录，继而被比较，
        再被归纳成“进步”或“顽固”，最后被拿去证明某种处置的正当性。
      </p>
      <p class="modal-copy">
        艾丽莎就是最清楚的例子。她初到病房时的失语、夜惊、拒食和对陌生语言的回避，在量表里很快不再被解释为战争遗孤的生存反应，
        而被改写成持续性判断障碍和早发精神分裂的征象。接下来图卡训练能否让她按顺序指认物品、静默时段里是否不再离床、唱诗时是否跟得上集体，
        都会被继续写进新的量表。表面上看，测试让医院更精确；实际上，它只是让医院更擅长把复杂人类经验挤压成方便比较的格子。
      </p>
      <p class="modal-copy">
        也正因为这样，量表在 Blackthorn Hall 并不是治疗前的附属文书，而是治疗本身的一部分。一个孩子如果越来越会在问答中给出最短的反应，
        在外界看来可能意味着顺从、安静、配合；在量表里，这会被进一步记录成“语言效率提升”“情绪波动下降”。一名病人如果在术后不再大声反抗，
        量表不会询问她是更舒适了，还是更虚弱了，只会把结果写成“躁动减轻”。这些测试的真正用途，从来不是理解病人是谁，
        而是帮助医院更稳定地决定病人接下来会被送到哪里去。
      </p>
      <p class="modal-copy">
        因此，这一栏下面的几个入口虽然看起来像普通工具页，但实际读法应该更像是在看一种制度的骨架。接收评估表告诉你谁会被纳入院方的可管理范围，
        情绪稳定量表告诉你院方偏爱怎样的结果，儿童语言反应记录会让你看见“恢复”是如何被定义的，而所谓前额叶适应性评估，
        则揭示了医院如何把量表语言推到最终、最不可逆的地方。只要你顺着这些表一路往下读，就会发现一件事:
        Blackthorn Hall 的问题从来不只是做了什么手术，而是它很早以前就已经学会用看似客观的方式，把所有抵抗都写成病征。
      </p>
      <div class="library-grid">
        <button class="library-button" data-psych-target="admissions">
          <span class="library-topline">Assessment</span>
          <strong>入院接收评估表</strong>
          <p class="library-summary">用于区分战后创伤、平民情绪障碍与儿童长期观察病例。</p>
        </button>
        <button class="library-button" data-psych-target="treatment">
          <span class="library-topline">Rating</span>
          <strong>情绪稳定量表</strong>
          <p class="library-summary">看似中立的量表，后来越来越多地为治疗升级提供理由。</p>
        </button>
        <button class="library-button" data-psych-target="daily-care">
          <span class="library-topline">Juvenile</span>
          <strong>儿童语言反应记录</strong>
          <p class="library-summary">在艾丽莎这样的病例里，图卡、短答与安静都被写成“改善”。</p>
        </button>
        <button class="library-button" data-psych-target="methods">
          <span class="library-topline">Review</span>
          <strong>前额叶适应性评估</strong>
          <p class="library-summary">病区里最危险的一张表，它决定谁会被继续推进下一步。</p>
        </button>
      </div>
    `,
  );

  document.querySelectorAll("[data-psych-target]").forEach((button) => {
    button.addEventListener("click", () => {
      inspectTarget(button.dataset.psychTarget);
    });
  });
}

function inspectForum() {
  openModal(
    "论坛",
    `
      <p class="modal-copy">
        “论坛”是这份门户式首页里最关键的一层伪装。放在千禧年前后的中文网页语境里，它看起来理所当然: 留言板、串帖、问答区、检索讨论区，
        像是给用户停留下来发言的地方。但在 Blackthorn Hall 的档案站里，这一栏其实承担着更复杂的作用。它一方面维持了门户站那种
        “信息不是单向发布，而是可以被讨论、被追问、被转发”的表象，另一方面也把最危险的东西藏在了最容易被忽视的地方。
        因为比起正式报道和官方介绍，人们往往不会把论坛贴子当成严肃证据，而恰恰是在这里，第二个操作者才开始留下痕迹。
      </p>
      <p class="modal-copy">
        未署名留言串是最明显的入口。它几乎不提供信息，只不断把问题折回给日期。换句话说，它不是在和主控对话，而是在训练主控以某种顺序阅读。
        页面改写痕迹则进一步把这种顺序固定下来: 当你意识到缓存版本和当前版本不一致，你就很难再把问题理解成普通的数据错误。
        这两块内容之所以被放在“论坛”而不是“新闻”，不是因为它们更轻，而是因为它们必须先显得不正式，才有可能绕过整个档案站表面上的公文语气。
      </p>
      <p class="modal-copy">
        论坛频道还承担着一种门户站特有的错觉: 它让一切显得像是用户自己发现的。和一篇郑重其事的揭发稿相比，零碎串帖、分散问题、
        时间相隔的留言、看似无意义的回贴，更能让人误以为这些发现是“偶然碰上”的，而不是有人故意留好的路径。Blackthorn Hall 的站内结构
        正是利用了这种网络经验。你越是在这里多停留一会儿，越会觉得是自己在拼出真相，直到回头再看，才意识到每一步都像早被安排。
      </p>
      <p class="modal-copy">
        论坛里另一个值得注意的部分，是它如何把“正式记录不能直接说的话”转化成可流动的碎片。日期检索讨论不会一次性给你答案，
        只会把你推向一篇又一篇报道；艾丽莎档案串帖也不会替你总结，而是要求你把公开版本与另一套叙述自己拼在一起。
        这让真相显得不像结论，更像一种在站内不断扩散的后验阅读方式。也正因为如此，当你后来再回看那些看似正式的新闻栏目时，
        你已经不可能按第一次那样去读它们了。
      </p>
      <p class="modal-copy">
        所以论坛不是附属品，而是整份档案站最接近“意识”的部分。它既像旧式门户的热帖区，又像地下批注系统；
        既保留着用户参与的假象，又承担着把机构语言拆开的真正功能。下面这些入口，从表面看只是一组讨论板块，
        实际上却构成了主控与第二操作者之间唯一可持续发生作用的通道。你并不是在浏览一个讨论区，
        而是在进入一套无法通过公文语言直接说出的记忆系统。
      </p>
      <div class="library-grid">
        <button class="library-button" data-forum-target="exchange">
          <span class="library-topline">Live Thread</span>
          <strong>未署名留言串</strong>
          <p class="library-summary">对方从不直接回答问题，只会留下日期。</p>
        </button>
        <button class="library-button" data-forum-target="revision">
          <span class="library-topline">Diff Board</span>
          <strong>页面改写痕迹</strong>
          <p class="library-summary">缓存与当前页面的差异，像有人在另一头实时覆盖内容。</p>
        </button>
        <button class="library-button" data-forum-target="search">
          <span class="library-topline">Lookup</span>
          <strong>日期检索讨论</strong>
          <p class="library-summary">把收到的日期输入进去，找到每篇对应报道。</p>
        </button>
        <button class="library-button" data-forum-target="dossier">
          <span class="library-topline">Composite</span>
          <strong>艾丽莎档案串帖</strong>
          <p class="library-summary">所有碎片最终都会在这里拼回去。</p>
        </button>
      </div>
    `,
  );

  document.querySelectorAll("[data-forum-target]").forEach((button) => {
    button.addEventListener("click", () => {
      inspectTarget(button.dataset.forumTarget);
    });
  });
}

function openCorruptedPage(target) {
  const label = getTargetLabel(target);
  openModal(
    label,
    `
      <div class="corruption-panel">
        <p class="modal-copy corruption-copy">
          你不需要知道这些。
        </p>
        <p class="inline-note corruption-note">
          文字像被人从纸面背后揉皱，只有和艾丽莎有关的档案还保持着原来的排列。
        </p>
      </div>
    `,
  );
}

function renderPortalCopy(button, corrupted) {
  const kicker = button.querySelector(".portal-kicker");
  const title = button.querySelector("strong");
  const summary = button.querySelector("p");

  if (!kicker || !title || !summary) {
    return;
  }

  if (!corrupted) {
    kicker.textContent = button.dataset.originalKicker || kicker.textContent;
    title.textContent = button.dataset.originalTitle || title.textContent;
    summary.textContent = button.dataset.originalSummary || summary.textContent;
    return;
  }

  kicker.textContent = corruptText(button.dataset.originalKicker || kicker.textContent, 0.24);
  title.textContent = corruptText(button.dataset.originalTitle || title.textContent, 0.28);
  summary.textContent = corruptText(button.dataset.originalSummary || summary.textContent, 0.22);
}

function inspectHistory() {
  if (!state.flags.historySeen) {
    state.flags.historySeen = true;
    addLog("医院沿革页被你翻开，时间线比介绍文案更加老实。");
    render();
  }

  openModal(
    "医院沿革",
    `
      <p class="modal-copy">
        Blackthorn Hall 于 <span class="success-copy">1919</span> 年在英国北部投入使用，最初由战争复健基金资助，
        只为一战后精神受损军人提供长期住院治疗。二战期间，院方扩建北侧病区，继续收治战后创伤患者。
      </p>
      <p class="modal-copy">
        这家医院最初的存在理由并不神秘，也并不罕见。战后英国北部出现过一批专门面向退伍军人精神创伤的机构，
        它们通常坐落在城市边缘、乡间缓坡或者旧宅改造地带，既便于远离城区日常视线，又方便营造一种
        “安静、适宜恢复”的氛围。Blackthorn Hall 在公开档案里被描述成这样一处地方: 大宅、花园、长廊、病房、
        修复性劳动与规律作息。最初的宣传语很克制，强调的是休整、睡眠和重新进入社会，而不是任何激进疗法。
      </p>
      <p class="modal-copy">
        真正的变化发生在二战期间。随着创伤病例类型变得更复杂、人数持续增加，Blackthorn Hall 不再只是供长期静养的机构，
        而开始被改造成功能更细分的体系: 北翼长住病房负责承接退伍军人与高波动住院者，东侧儿童病区被单独划出，
        水疗与休息套间成为前置驯化空间，外科附楼则在战后扩建时逐步抬升地位。也就是说，医院的沿革并非单纯的扩张，
        而是一种目标的迁移: 从“如何照料创伤者”，慢慢转向“如何管理那些不符合社会秩序的人”。
      </p>
      <ul class="fact-list">
        <li><strong>1919</strong> · 退伍军人创伤病区成立</li>
        <li><strong>1940s</strong> · 二战期间扩建北翼与外科附楼</li>
        <li><strong>1958</strong> · 医院停止运营，公开说明仅写“行政性封存”</li>
      </ul>
      <p class="modal-copy">
        1947 年以后，医院对普通民众开放，被外界视作它从战时机构转向公共医疗资源的一次进步。可从档案结构上看，
        这一步并没有降低控制性，反而让它拥有了更多可供筛选的对象。焦虑、抑郁、妄想、语言失序、婚姻冲突、儿童拒绝接触，
        这些原本分属家庭、社会和创伤语境的问题，越来越多地被统一塞进同一套病房制度和评估语言里。沿革页最危险的地方，
        就在于它总把这些变化写成“扩容”“增建”“完善”，却不写每一次完善都意味着更多人被纳入同一台制度机器。
      </p>
      <p class="modal-copy">
        1958 年的停运说明尤其值得反复读。官方措辞只有“行政性封存”这样含混的字眼，像是在告诉公众，这不过是一次普通的机构收束。
        但如果把媒体报道、设施变更、手术记录和后来的页面改写放在一起，就会发现这份停运既不是突然的，也不是纯粹的财政问题。
        它更像一套叙事在失控前的匆忙收口: 当外界已经开始质疑疗法的人道性、当内部记录越来越难与公开宣传吻合、当某些病例
        已经无法再被稳妥地解释为“恢复”时，Blackthorn Hall 选择了先结束机构，再留下一份看似整齐的历史。
      </p>
      <p class="inline-note">
        如果只看沿革，Blackthorn Hall 会像一所不断顺应时代变化的医院；如果把沿革和后续所有栏目连起来看，
        它更像一套逐步学会如何合理化自身暴力的机构。
      </p>
    `,
  );
}

function inspectAdmissions() {
  if (!state.flags.admissionsSeen) {
    state.flags.admissionsSeen = true;
    addClue("civilianYear");
    addLog("Admissions charter 的修订年份跳了出来: 1947。");
    render();
  }

  openModal(
    "接收政策",
    `
      <p class="modal-copy">
        前期接收条款写得非常明确: Blackthorn Hall 只面向战后精神受损军人与复员军官。
        直到 <span class="success-copy">1947</span> 年，院方才在章程里加入 civilian admissions，
        开始收治普通民众的强迫、抑郁、妄想与“家庭失序”相关病症。
      </p>
      <p class="modal-copy">
        这份接收政策表面上是一张制度边界说明，实际上几乎能够概括 Blackthorn Hall 后来所有问题的起点。
        在只接收退伍军人的阶段，院方面对的是一种被国家承认、也较容易获得同情的痛苦: 战争造成的失眠、惊跳、妄听、
        反复回忆和社会功能崩塌。此时医院仍然可以把自己描述成战后修复的一部分，仿佛病区是在替国家照顾那些被战争消耗的人。
        但一旦 1947 年章程修订后向普通民众开放，这种边界立刻模糊了。战争创伤和普通人的家庭冲突、儿童失语、长期沉默、
        婚姻挫败、道德恐慌，被一起纳入了同一套接收机制。
      </p>
      <div class="quote-block">
        Admissions Charter Amendment, 1947:
        “The House shall now extend service to civilian persons whose disturbed judgment impedes domestic and civic function.”
      </div>
      <p class="modal-copy">
        最值得警惕的并不是“平民开放”这件事本身，而是条文里使用的那种词汇。disturbed judgment、domestic function、civic function，
        这些词看起来像中性描述，实际上却把大量原本属于生活困境、文化隔阂和创伤后反应的经验，统一翻译成了公共秩序问题。
        一名孩子如果无法及时回应陌生语言、一位妻子如果在家庭结构中持续沉默、一位青年如果表现出重复性恐惧，
        在这种框架里都可能被理解成“功能受损”。而一旦问题被定义成功能受损，机构就会天然拥有更多干预权。
      </p>
      <p class="modal-copy">
        艾丽莎正是在这样的制度转折里进入 Blackthorn Hall 的。她既不属于退伍军人，也不属于传统意义上的公共医疗求诊者，
        而是战争遗留给和平社会的一块难以安置的残余。对外看，医院接收她显得仁慈而文明；对制度内部而言，她却非常适合被重新分类。
        她的失语可以被写成拒绝接触，她的惊恐可以被写成早发精神分裂的征兆，她对陌生环境的排斥可以被归入判断功能障碍。
        也就是说，接收政策真正打开的，不只是医院的大门，而是把痛苦改写成病症的入口。
      </p>
      <p class="modal-copy">
        从门户首页的角度看，这一栏像普通“招生简章”或“服务说明”；从档案角度看，它却定义了谁会被看见、谁会被收留、
        谁会被继续记录，以及谁最终可能被推进更深的治疗路径。医院后来那些最可怕的决定，都不是在第一页就写出来的，
        但第一页已经给了它们合法语言。于是当你再去看后面的护理报道、量表、复审记录和手术说明时，就会明白，
        所有路径都不是在最后一刻突然转向的，它们在接收政策被写下来的时候，就已经被默默预设了方向。
      </p>
      <p class="inline-note">
        馆藏终端提示你输入“医院第一次向外部公众打开的年份”，表面上只是一个数字谜题；可真正重要的，是这道门打开后谁被放了进来。
      </p>
    `,
  );
}

function inspectFacilities() {
  if (!state.flags.facilitiesSeen) {
    state.flags.facilitiesSeen = true;
    addLog("你翻开了设施档案页。公开介绍最喜欢展示环境，而不是过程。");
    render();
  }

  openArchiveLibrary(
    "医院设施",
    `
      <p class="modal-copy">
        设施页是 Blackthorn Hall 最擅长做门面的地方。对一个千禧年门户站而言，这里本该只是“院区介绍”或“环境展示”：
        让人看见窗明几净的病房、带日照的果园步道、安静的水疗室和现代化的外科附楼，继而相信这是一家秩序良好、层级分明、
        设施先进的机构。也正因为如此，设施页总会天然带着一种劝服力。它让访客先被空间说服，再去接受那些空间里发生的事情。
      </p>
      <p class="modal-copy">
        但如果把这些设施按真正的功能重新排列，Blackthorn Hall 的空间逻辑就完全不是“照料”这么简单。北翼长住病房负责承接
        持续波动的退伍军人与长期住院者，儿童观察寝室则把最年轻、也最难用成人语言解释的病例单独收束起来；水疗与休息套间
        既是对外宣传中的柔和景观，也是许多进一步干预前的驯化区；果园与日照庭院专门承担展示任务，让来访者只看见静止、
        整洁和缓慢；Theatre B 则是那些所有平静叙述最终汇聚的地方。换句话说，空间在这里从来不只是容器，而是一整套筛选、
        缓冲、隐藏和展示的机制。
      </p>
      <p class="modal-copy">
        这也解释了为什么设施页在档案站里如此重要。它不仅告诉你房间长什么样，更告诉你一个机构如何安排可见性:
        哪些地方会被拍照，哪些地方永远不会出现在宣传册里；哪些房间可以对捐助委员会开放，哪些区域需要在巡查前提前锁门；
        哪些空间被命名成“康复庭院”，哪些空间只在内部图纸上留下编号。主控一旦开始注意这些细节，就会意识到，
        医院从来不是简单地在既有空间里执行治疗，而是在用空间本身辅助叙事。
      </p>
      <p class="modal-copy">
        艾丽莎的轨迹尤其能说明这一点。她先出现在儿童观察寝室，随后进入图卡训练和统一作息的区域，再被不断推进到更靠近
        外科与术后观察的动线里。她并不是一下子被送上手术台，而是被空间一步步向前移动。每经过一个房间，她的身份就会被
        重新写一次: 从战争遗孤，到儿童病例，到难治性个案，到可以被纳入外科试验的对象。你越理解这些设施如何彼此衔接，
        就越难再把所谓“治疗升级”理解成单纯的医疗判断。
      </p>
      <p class="modal-copy">
        所以下面的条目应该被当成空间证词来读。它们不是装点场面的环境介绍，而是医院如何分配可见性、如何隐藏手段、
        如何让某些结果看起来早已被房间结构预设好的证据。设施页越整洁，越说明它想让你忘记房间与房间之间真正发生过怎样的转运。
      </p>
    `,
    facilityFeatures,
    "facility",
  );
}

function inspectStaff() {
  if (!state.flags.staffSeen) {
    state.flags.staffSeen = true;
    addLog("staff directory 被打开后，霍华德和珍妮的名字都显得比之前更具体。");
    render();
  }

  openArchiveLibrary(
    "医护人员",
    `
      <p class="modal-copy">
        如果说设施页负责塑造空间的可信度，那么人物页负责塑造机构的可信度。Blackthorn Hall 的门户站式首页把医护人员栏目放得很显眼，
        就像早期网站总爱用“专家坐诊”“名医推荐”“优秀护士”去建立权威感一样。霍华德会被写成理性、克制、富于现代精神的外科推动者，
        珍妮会被写成温柔、耐心、擅长陪伴儿童的高级护士，其余人物则共同构成一张看起来专业、分工明确、值得信任的面孔网络。
      </p>
      <p class="modal-copy">
        但人物页真正值得看的，并不是它说了什么，而是它删掉了什么。院方总会强调霍华德的履历与学会认可，却不愿多提他如何一次次把
        前额叶相关介入改写成“安定”与“功能恢复”；也会强调珍妮如何擅长安抚儿童，却不让外人看见她的记录里出现过多少犹豫和更正。
        总护士长、麻醉医师、病例审阅者看起来只是组织中的普通节点，可实际上每一个名字都对某类决定拥有特殊权力:
        谁被定义为“适合观察”，谁被写成“需要升级”，谁在术后被记录为“平静”，往往都不是自然发生的，而是由这些人物共同书写出来的。
      </p>
      <p class="modal-copy">
        人物页也让人更容易理解 Blackthorn Hall 如何把责任稀释掉。对外而言，任何一项治疗都像是团队协作的产物: 医生判断、
        护士陪护、总护士长维持秩序、麻醉医师保障过程平稳、病案审阅者更新分类。可一旦每个环节都显得合规，最后就很难追问
        究竟是谁真正推动了不可逆的一步。机构最擅长的事，恰恰是把个人决定融进专业流程里。
      </p>
      <p class="modal-copy">
        艾丽莎之所以会被反复写进这套人物结构，也正因为她特别适合作为“被共同照顾”的病例呈现出来。霍华德负责理论和方向，
        珍妮负责可被展示的照护细节，Ward 负责调整她的分类语言，Finch 则让外科程序在文书上显得平稳可控。
        当所有名字都各自承担一小块叙述时，真正的暴力就会显得既分散、又专业，仿佛没有人单独做错了什么。
      </p>
      <p class="modal-copy">
        所以人物页不是附属信息，而是整套机构自我辩护的关键一环。它让治疗看起来像是被一群训练有素、各司其职的人谨慎执行，
        也让外界更难相信同一批人会把儿童创伤一路推向额叶手术。你越认真地读这些人物档案，越会发现:
        真正令人不安的不是某个人过于邪恶，而是他们都能在看似合理的位置上，让不可承受的事显得合理。
      </p>
    `,
    getVisibleStaffProfiles(),
    "staff",
  );
}

function inspectDailyCare() {
  if (!state.flags.dailyCareSeen) {
    state.flags.dailyCareSeen = true;
    addLog("你开始翻阅日常看护报道。艾丽莎最早是以“恢复中的孩子”身份出现在这些稿子里的。");
    render();
  }

  openArchiveLibrary(
    reportArchives["daily-care"].title,
    `
      <p class="modal-copy">
        日常看护报道是整套档案里最容易让外部读者放松警惕的部分。标题总在说早餐、唱诗、图卡、毯子、庭院、缝纫、安静时段，
        这些词看起来都很轻，像是在讲一种节律稳定、人员耐心、环境温和的照护生活。也正因为它足够轻，
        医院才能把最关键的个案先安放在这里，让读者在意识到任何激进治疗之前，先接受“这是一处会认真照顾孩子的地方”。
      </p>
      <p class="modal-copy">
        对艾丽莎来说，这一栏几乎就是她被第一次塑形的地方。她先被写成会重新在餐厅坐下的小女孩，再被写成会在唱诗时开口、
        愿意跟着别人一起行动的孩子；珍妮的名字也总在这些稿子里出现，因为护理页最适合制造一种温柔见证的效果。
        报道并不需要完全撒谎，只需要选择性地讲述。她确实可能在某天安静坐下了，也确实可能在某次唱诗时跟着开口，
        但这些瞬间一旦脱离前后的药物、规训、惊恐与惩罚，就会被轻易写成自然恢复。
      </p>
      <p class="modal-copy">
        从机构叙事的角度看，日常看护报道承担的是“前置说服”的功能。它先告诉你，医院关心孩子的睡眠、进食、作息与情绪；
        再告诉你，孩子的一切变化都在护理观察之中发生；于是当后续更激进的治疗手段出现时，外部读者会本能地认为，
        那也只是同一套关怀逻辑的更进一步。也就是说，护理报道从来不只是记录护理，而是在替后面的每一步干预打底。
      </p>
      <p class="modal-copy">
        这类稿件还有一个常见策略，就是把秩序直接写成安全感。例如固定座位、固定餐具、统一灯光、安静时段、集体唱诗，
        都被描述成帮助病人“重新找到节律”的方法。可从另一种角度看，它们也同样是方便比较、方便指令、方便惩罚的制度工具。
        一名孩子越是学会在这种秩序里不出声，越容易被写成“稳定”；而医院一旦把稳定定义成最高目标，就很容易把沉默与顺从当成成果。
      </p>
      <p class="modal-copy">
        所以下面的护理稿件要和后面的疗法、手术、统计宣传一起读。单看它们，你会觉得 Blackthorn Hall 只是比别处更有耐心；
        连起来看，你才会明白这些“温柔故事”为什么总是恰好在最关键的时刻替医院垫好下一层解释。
      </p>
    `,
    reportArchives["daily-care"].items,
    "report",
  );
}

function inspectMethods() {
  if (!state.flags.methodsSeen) {
    state.flags.methodsSeen = true;
    addLog("治疗手段报道里的语气很平，像是在努力把升级写成自然过渡。");
    render();
  }

  openArchiveLibrary(
    reportArchives.methods.title,
    `
      <p class="modal-copy">
        治疗手段报道记录的是 Blackthorn Hall 如何一步步把“照护”转写成“干预”。在这些稿件里，休息疗法、电流疗法、胰岛素方案、
        图卡训练和行为矫正并不会被呈现为彼此冲突的路线，而会被写成一条连续升级的曲线，仿佛医生只是根据病情轻重在更换不同工具。
        这种写法最容易让读者忽略一件事: 每一次升级都意味着解释方式的改变。
      </p>
      <p class="modal-copy">
        当某个孩子在护理稿里还被描述成“紧张、失语、夜间不安”时，她在治疗手段稿里就可能已经变成了“需要更深度稳定的病例”。
        词仍然很软，逻辑却已经改变。休息不再只是休息，而是前置驯化；图卡训练不再只是辅助表达，而是收紧回答范围；
        电流疗法不再只是尝试性手段，而是通向更强介入的试运行。最危险的不是某个方法单独出现，而是这些方法都被放在同一种
        “为了恢复功能”的语境里，被写成互相证明、互相接力。
      </p>
      <p class="modal-copy">
        艾丽莎相关条目尤其能说明这一点。她在这些稿件里经常不被直接点名，而是作为“某位年轻病例”“一名长期惊恐儿童”
        或“某位终于获得稳定睡眠的住院者”出现。这样的写法一方面保护了宣传上的体面，一方面也让读者更容易接受抽象的改善叙述，
        而不去追问具体孩子到底经历了什么。等到外界已经接受“这套手段确实有效”，再把她重新推到台前当成功例子时，
        叙述就会显得非常顺畅。
      </p>
      <p class="modal-copy">
        这一栏还体现了医疗机构最熟练的一种语言技术: 把副作用转写成指标。迟缓可以被称作安静，反应变慢可以被称作情绪平稳，
        服从指令可以被称作功能恢复，断裂式回答可以被称作语言节省。于是原本该引发警觉的变化，进入报道后反而像是被量化成了
        医学进步。等到某名病人真的被一步步送往不可逆的外科路径时，所有前置文本都已经替那一步做好了语言上的铺垫。
      </p>
      <p class="modal-copy">
        因此，治疗手段页不应该只被当成“技术说明”。它更像一组不断抬高门槛的说服稿。你读到的每一个方法，
        都既是做给病人的，也是做给外界看的；既是程序，也是叙述。只有把这些手段放回完整链路里，才能看见
        Blackthorn Hall 如何一步步把“不够顺从的生命经验”转写成“适合升级处置的病例”。
      </p>
    `,
    reportArchives.methods.items,
    "report",
  );
}

function inspectSurgeryArchive() {
  if (!state.flags.surgerySeen) {
    state.flags.surgerySeen = true;
    addLog("手术相关报道比别处更像说明书，而说明书最会隐藏痛苦。");
    render();
  }

  openArchiveLibrary(
    reportArchives["surgery-archive"].title,
    `
      <p class="modal-copy">
        手术相关报道是整份档案里语气最冷静的一组材料。它们谈的是 Theatre B、麻醉控制、术后观察、外科路径和讲座摘要，
        看起来像机构最专业、最不容置疑的部分。也正因为如此，它们最容易用技术语言替代道德语言，让所有本该令人不安的事
        被重新命名成时长、剂量、路径、反应和指标。
      </p>
      <p class="modal-copy">
        这类稿件往往非常克制，几乎不直接出现情绪词。病人不再被写成害怕、痛苦或虚弱，而被写成“术后平静”“反应迟缓”
        “躁动减轻”“配合进食”。麻醉问题不被写成风险，而被写成精确控制；前额叶手术不被写成切除，而被写成 relief、access、
        stabilisation。换句话说，手术页并不是把真相藏起来，而是把真相翻译成一套只允许内部人士继续读懂的专业方言。
      </p>
      <p class="modal-copy">
        艾丽莎从进入这组报道开始，就逐渐失去了作为“孩子”的身份。她不再是护理稿里那个会在唱诗时轻轻开口的小女孩，
        而越来越像一份可以被讨论路径、剂量和术后表现的病例。霍华德的名字在这里出现得更密，Finch 的麻醉记录也越来越关键，
        每一篇稿子都像在告诉外界: 到了这一阶段，判断已不再属于普通人，而应交给技术。
      </p>
      <p class="modal-copy">
        可正是在这种技术口吻里，最残酷的事情才更容易发生。因为当所有问题都被改写成“是否更稳定”“是否更安静”“是否更适合社会功能”时，
        手术本身就不再需要被解释成一种暴力，而可以被描述成一种先进而必要的修正。于是到了 1957 年冬天，艾丽莎死于手术，
        报道仍然有办法留下“without incident”这样的句子。它不是不知道发生了什么，而是已经学会如何在语言里取消这件事。
      </p>
      <p class="modal-copy">
        所以手术页里的每一篇稿子都不能单独读。你必须把它们和护理、量表、宣传统计、媒体回访连在一起，才能意识到这里从来不是
        孤立的手术室记录，而是整个机构叙事的最终收束点。前面所有栏目都在替这一页提供合法性；而这一页写成以后，
        前面那些栏目又会反过来被证明“早有征兆”。这种循环，正是 Blackthorn Hall 最难被外界一眼识破的地方。
      </p>
    `,
    reportArchives["surgery-archive"].items,
    "report",
  );
}

function inspectAchievements() {
  if (!state.flags.achievementsSeen) {
    state.flags.achievementsSeen = true;
    addLog("医学成就栏像一面展示墙，而艾丽莎最终就是在这面墙上被伪造成了成功。");
    render();
  }

  openArchiveLibrary(
    reportArchives.achievements.title,
    `
      <p class="modal-copy">
        医学成就报道是整份站点里最体面、也最可疑的一部分。这里汇集了地区性表彰、捐助委员会访问、协会认可、成功案例宣传、
        儿童恢复率统计以及对外媒体回访。对早期门户网站读者而言，这一栏看起来最像“可以放心转发”的内容，因为它天然带着外部背书。
        也正因为如此，它承担着替整个机构做最终认证的功能。
      </p>
      <p class="modal-copy">
        这些稿件的共同特点，是把复杂过程压缩成结果展示。护理不再重要，治疗手段的争议性也不再重要，真正被放到台前的是
        “已经恢复的孩子”“被学会认可的研究者”“获得慈善赞许的病区”“被记者当场看见的成功案例”。医院之所以需要这一栏，
        是因为任何制度都不能只依赖内部记录为自己辩护，它还需要外部视线来完成最后一道封印。只要报纸、委员会和学会都曾留下过
        赞许，后来的怀疑就更容易被说成个别误解。
      </p>
      <p class="modal-copy">
        艾丽莎最后正是在这一栏里被彻底钉死成“成功”。她不再只是某篇报道里未被点名的儿童病例，而被推到外界面前，
        成为足以让来访者带着满意离开的活证据。到了这一步，哪怕她已经死去，也只需要一个身形相近、回答训练到位的女孩，
        就能让整个叙事继续运转。医学成就稿不关心病人究竟经历了什么，它只关心公众最后看见了什么。
      </p>
      <p class="modal-copy">
        这一栏还暴露了机构最熟练的一种统计暴力。恢复率、回访满意度、成功案例、长期观察改善值，这些数字和名词的可信度，
        都建立在“谁被算进去、谁被提前抹掉”的前提上。一个病例如果在治疗中消失、死亡、被替换，统计可以不写，
        只要最后还能展示出某种看起来平静的结果，数字就仍然可以漂亮。于是成就页越整洁，反而越应该追问那些没有进入页面的人。
      </p>
      <p class="modal-copy">
        因而医学成就页不是终点，而是最需要回头审视的地方。它告诉你，一家机构并不是在真相站稳以后才得到荣耀，
        很多时候恰恰是在荣耀不断堆叠的过程中，真相才被越埋越深。下面这些稿件如果单独看，会像一次次顺理成章的进步；
        只有把它们放回艾丽莎、霍华德、珍妮、莉娜和 Theatre B 的全线叙述中，才会看见所谓成就到底建立在怎样的沉默之上。
      </p>
    `,
    reportArchives.achievements.items,
    "report",
  );
}

function inspectDirector() {
  if (!state.flags.directorSeen) {
    state.flags.directorSeen = true;
    addLog("院长介绍页比别处更克制，但字里行间已经在替某种手术铺路。");
    render();
  }

  if (
    state.flags.terminalUnlocked &&
    state.flags.treatmentSolved &&
    !state.flags.directorNoteKnown
  ) {
    state.flags.directorNoteKnown = true;
    addClue("prefrontal");
    addLog("治疗目录重建后，院长页边缘浮出一行 staff marginalia: PREFRONTAL。");
    render();
  }

  openModal(
    "院长介绍",
    `
      <p class="modal-copy">
        Professor Edwin Hargreaves 被介绍为“脑神经与判断障碍研究专家”，
        也是医院后期外科项目的主要倡导者。他在公开页面里反复写到，
        某些患者的问题并不在痛苦本身，而在“前端判断区失去安定能力”。
      </p>
      <p class="modal-copy">
        从门户站式人物塑造的角度看，院长页承担的是“总解释者”的角色。霍华德、珍妮、Ward、Finch 等人的页面负责提供具体面孔，
        而 Hargreaves 负责提供整套机构语言的理论外壳。他不像其他人那样出现在病房、手术台或护理记录的一线，
        却持续出现在概念层面: judgment, order, civic function, frontal stability。只要这些词被院长反复写下，
        后面的每一项措施看起来就都像是在服从更高一级的理性。
      </p>
      <p class="modal-copy">
        这也是为什么院长页即使字数不多，分量却极重。它并不需要详细讲述每一次操作，只要确立一种解释框架:
        痛苦不再只是主观经验，而是功能问题；功能问题不再只是照护对象，而是可以被定位到“前端判断区”的医学对象；
        一旦问题被定位到脑部区域，任何更强的干预就都更容易显得可接受。换句话说，Hargreaves 的作用不在于执行，
        而在于把执行提前转换成理论上的必然。
      </p>
      <p class="modal-copy">
        他公开文稿里最危险的地方，从来不是赤裸裸的暴力，而是那种令人信服的克制。他几乎从不使用激烈词汇，
        也极少直接谈论手术。相反，他更喜欢写“安定”“减轻痛苦”“恢复社会性功能”“减少对自我与家庭的损害”。
        正是这种温和，让他的语言极易被抄进护理页、治疗页和成就页里，最后扩散成整个机构默认的思维方式。
      </p>
      ${
        state.flags.directorNoteKnown
          ? `
            <p class="modal-copy">
              当 staff-only 的批注层浮出后，院长页的另一层面貌才会出现。那句
              <span class="success-copy">“File operative ledgers under PREFRONTAL, never under lobotomy.”</span>
              不只是归档习惯，更像一种自我保护。它说明 Hargreaves 很清楚哪些词太直、太重、太容易在未来变成证据，
              所以他选择用更解剖学、更中性、也更适合学术化包装的词，替整套操作重新命名。
            </p>
            <p class="modal-copy">
              这句批注把院长页和整份档案的关系说得非常明白: 理论不是漂浮在上面的解释，而是从最细小的文书命名开始，
              就已经参与了遮蔽。只要词被改了，手术的性质也会看起来像被改了；只要名字足够冷静，
              机构就有机会把后来的一切都写成专业选择，而不是伦理断裂。
            </p>
          `
          : `
            <p class="modal-copy">
              即使在公开层面还看不见那句 staff-only 批注，院长页也已经足够说明问题。它是整份门户站里最像“理论中心”的页面，
              也是所有后续文字最常引用却最少被单独怀疑的来源。你如果想知道 Blackthorn Hall 为什么能把那些越来越可怕的步骤
              写得如此顺理成章，就得先理解是谁替它发明了这套顺理成章的语言。
            </p>
          `
      }
      <div class="quote-block">
        ${
          state.flags.directorNoteKnown
            ? `手写批注从头像边缘渗了出来:
              <span class="success-copy">
                “File operative ledgers under PREFRONTAL, never under lobotomy.”
              </span>`
            : `现在这里只看得到公开介绍。等你拿到内部权限并重建治疗目录后，这一页也许会露出 staff-only 的批注层。`
        }
      </div>
    `,
  );
}

function inspectPress() {
  if (!state.flags.pressSeen) {
    state.flags.pressSeen = true;
    addClue("closureRumour");
    addClue("sequence");
    addLog("媒体报道比官方坦白得多: 批评声几乎都指向治疗升级与手术外科化。");
    render();
  }

  if (state.flags.theatreUnlocked && !state.flags.revisionSeen) {
    state.flags.revisionSeen = true;
    addInventory("snapshot");
    addClue("editorTrace");
    addLog("你重新打开媒体报道时，发现缓存版本与当前版本不一致。有人正在另一头改页。");
    render();

    openModal(
      "媒体报道 / 页面差异",
      `
        <p class="modal-copy">
          你非常确定自己第一次读到的不是这段话。缓存里保存的旧句子是:
        </p>
        <div class="quote-block">
          “Blackthorn Hall’s methods, though controversial, remain humane in their aim.”
        </div>
        <p class="modal-copy">
          但你再回到页面时，原位只剩另一句:
        </p>
        <div class="quote-block">
          <span class="success-copy">
            “Humane was the word they printed after the children stopped resisting.”
          </span>
        </div>
        <p class="inline-note">
          页脚多出来一行闪烁的空白输入位。对方没有直接说话，只像在等你先发问。
        </p>
      `,
    );
    return;
  }

  openModal(
    "媒体报道",
    `
      <p class="modal-copy">
        外部报道没有拿到完整内部记录，但口径很一致: Blackthorn Hall 在停运前几年，
        治疗方式越来越具有强制性。人道主义者公开指责院方以“顺从性”为目标，而不是康复。
      </p>
      <p class="modal-copy">
        媒体页之所以重要，不只是因为它提供了外部视角，而是因为它让你第一次看见机构之外的语言如何描述同一套行为。
        在医院自己的栏目里，所有事情都被写得循序渐进、合乎程序、符合照护逻辑；可一旦离开机构内部，记者、地方评论员、
        人道主义团体和零散目击者使用的词就会完全不同。他们会写 coercion、discipline、display、knife、compliance，
        而不是 calm、order、care、stability。换句话说，这一页不是在提供新事实，而是在提供另一种命名方式。
      </p>
      <div class="quote-block">
        The North Chronicle, 1958:
        “From sedation, to current, and finally to the knife, Blackthorn Hall has called coercion a cure.”
      </div>
      <p class="modal-copy">
        这句评论之所以如此锋利，是因为它直接穿透了 Blackthorn Hall 最擅长的包装结构。护理稿把一切写成温和开始，
        治疗稿把升级写成医学必要，手术稿再把最终介入写成技术选择；而媒体页用一句极短的话，把这条长长的叙事链压缩成
        从镇静到电流再到刀的直线。它没有给任何环节留下体面余地，因为它拒绝接受机构内部那种“每一步都只是稍微更进一步”的叙述。
      </p>
      <p class="modal-copy">
        也正因为外部报道掌握的信息不完整，所以这一页总带着一种既犹豫又逼近的气味。记者没有拿到病历原件，
        不知道每一项剂量，不清楚每一场手术的完整过程，但他们已经能从来访见闻、公开口径、统计宣传和病房传闻中，
        拼出某种越来越像真相的轮廓。外部世界对 Blackthorn Hall 的不安，往往不是来自一次爆炸式揭发，
        而是来自许多彼此不完全吻合的碎片逐渐朝同一方向倾斜。
      </p>
      <p class="modal-copy">
        对主控来说，媒体页还有另一个作用: 它是页面开始失稳的前夜。因为只有当你已经知道机构自己的说法长什么样，
        才会在外部语气出现后真正意识到那种不对劲。一旦再加上后续缓存与当前版本的错位，这一页就会从普通“新闻栏目”
        变成整个站点第一次承认自身叙述不再稳定的地方。
      </p>
      ${
        state.flags.revisionSeen
          ? `
            <p class="inline-note">
              现在你再读这页，已经无法忽略缓存与当前文本的错位。若要继续追下去，去看“页面改写痕迹”或直接尝试留言。
            </p>
          `
          : `
            <p class="inline-note">
              这句话像一道残缺的流程图。若治疗目录真的被删改过，
              它留下的顺序应该就是 <span class="success-copy">镇静 → 电流 → 前额叶手术</span>。
            </p>
          `
      }
    `,
  );
}

function inspectTerminal() {
  if (state.flags.terminalUnlocked) {
    openModal(
      "馆藏终端",
      `
        <p class="modal-copy">
          终端已经认出你的输入。目录层被向下掀开一格，staff-only 的治疗索引开始显形。
        </p>
        <p class="inline-note">
          你已经取得 <span class="success-copy">馆藏凭证</span>。接下来该去处理那份被删掉的治疗目录。
        </p>
      `,
    );
    return;
  }

  openModal(
    "馆藏终端",
    `
      <p class="modal-copy">
        登录框下只有一句旧提示: “Enter the year in which the House first opened itself to the public.”
      </p>
      <div class="code-row">
        <input
          class="code-input"
          id="terminal-code"
          type="text"
          inputmode="numeric"
          maxlength="4"
          placeholder="____"
          aria-label="输入馆藏终端年份"
        />
        <button class="modal-button" id="terminal-submit">提交年份</button>
      </div>
      <p class="feedback" id="terminal-feedback"></p>
    `,
  );

  const input = document.querySelector("#terminal-code");
  const feedback = document.querySelector("#terminal-feedback");
  const submit = document.querySelector("#terminal-submit");
  input.focus();

  const tryUnlock = () => {
    const value = input.value.trim();
    if (value === PUBLIC_YEAR_CODE) {
      state.flags.terminalUnlocked = true;
      addInventory("credential");
      addLog("终端接受了 1947，像是一直在等这个年份被重新敲出来。");
      render();
      inspectTerminal();
      return;
    }

    feedback.textContent = "终端没有报错，只是慢慢把你的输入擦掉了。";
  };

  submit.addEventListener("click", tryUnlock);
  input.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      tryUnlock();
    }
  });
}

function inspectTreatment() {
  if (!state.flags.terminalUnlocked) {
    openModal(
      "治疗目录",
      `
        <p class="modal-copy">
          目录条目被 staff-only 标记锁住了。公开层只留下几个看似无害的治疗名词，
          真正的删改部分还在更深一层。
        </p>
        <p class="inline-note">
          先从馆藏终端取得权限，再回来重建这份索引。
        </p>
      `,
    );
    return;
  }

  if (!state.flags.pressSeen) {
    openModal(
      "治疗目录",
      `
        <p class="modal-copy">
          目录已经能看见了，但顺序仍然像被人故意打散。你现在缺的不是权限，而是外部报道留下的那条批评路径。
        </p>
        <p class="inline-note">
          先去看媒体报道。那篇文章明确写过医院是如何从一种疗法升级到另一种疗法的。
        </p>
      `,
    );
    return;
  }

  if (state.flags.treatmentSolved) {
    openModal(
      "治疗目录",
      `
        <p class="modal-copy">
          你已经把删掉的条目重新排了出来。Theatre B 的内部封签还留在你手上。
        </p>
        <p class="inline-note">
          接下来该回头看院长页，确认他给手术记录设下的真正索引词。
        </p>
      `,
    );
    return;
  }

  openModal(
    "治疗目录",
    `
      <p class="modal-copy">
        内部索引残存着四个治疗名词，但顺序被刻意打乱。媒体报道说过，
        Blackthorn Hall 的升级路径是从镇静，到电流，再到前额叶手术。
      </p>
      <p class="inline-note">
        按正确顺序重建目录。按错会回滚。
      </p>
      <div class="sequence-grid">
        <button class="sequence-button" data-step="sedation">
          <strong>Rest Sedation</strong>
          <span>以镇静与长时休息削弱冲动反应</span>
        </button>
        <button class="sequence-button" data-step="hydro">
          <strong>Hydrotherapy</strong>
          <span>被宣传为非侵入性的安抚性水疗</span>
        </button>
        <button class="sequence-button" data-step="current">
          <strong>Electrical Persuasion</strong>
          <span>通过电流重新校准判断与服从</span>
        </button>
        <button class="sequence-button" data-step="prefrontal">
          <strong>Prefrontal Leucotomy</strong>
          <span>最终的外科“安定化”方案</span>
        </button>
      </div>
      <div class="progress-strip">当前顺序: ${formatSequenceProgress()}</div>
    `,
  );

  document.querySelectorAll(".sequence-button").forEach((button) => {
    button.addEventListener("click", () => {
      pressTreatmentStep(button.dataset.step);
      render();
      inspectTreatment();
    });
  });
}

function inspectTheatre() {
  if (!state.flags.treatmentSolved) {
    openModal(
      "Theatre B 封存记录",
      `
        <p class="modal-copy">
          封存层仍然关着。你还没有重建那份被删掉的治疗目录，也就拿不到 Theatre B 的真正入口。
        </p>
        <p class="inline-note">
          先去处理治疗目录，再回来开这扇门。
        </p>
      `,
    );
    return;
  }

  if (!state.flags.directorNoteKnown) {
    openModal(
      "Theatre B 封存记录",
      `
        <p class="modal-copy">
          封存层没有直接接受输入，它先要求你提供院长亲自使用的归档词。
          外部媒体用的叫法不算数。
        </p>
        <p class="inline-note">
          回到院长介绍页。治疗目录重建完成后，staff marginalia 应该已经浮出来了。
        </p>
      `,
    );
    return;
  }

  if (state.flags.theatreUnlocked) {
    openModal(
      "Theatre B 封存记录",
      `
        <p class="modal-copy">
          Theatre B 已经被你打开，但它并没有给出完整答案。真正开始变化的是你刚才读过的外部报道。
        </p>
        <p class="inline-note">
          回去看媒体页。某个人显然在等你意识到“官方版本”并不是唯一版本。
        </p>
      `,
    );
    return;
  }

  openModal(
    "Theatre B 封存记录",
    `
      <p class="modal-copy">
        封存层要求一个解剖学索引词。提示写得冷静而恶毒:
        “Enter the lobe-name under which the Professor filed his operative ledgers.”
      </p>
      <p class="inline-note">
        这不是病名，也不是外部媒体使用的词。真正答案藏在院长页的 staff marginalia 里。
      </p>
      <div class="code-row">
        <input
          class="code-input"
          id="theatre-code"
          type="text"
          maxlength="16"
          placeholder="INDEX WORD"
          aria-label="输入 Theatre B 索引词"
        />
        <button class="modal-button" id="theatre-submit">解封记录</button>
      </div>
      <p class="feedback" id="theatre-feedback"></p>
    `,
  );

  const input = document.querySelector("#theatre-code");
  const feedback = document.querySelector("#theatre-feedback");
  const submit = document.querySelector("#theatre-submit");
  input.focus();

  const tryUnlock = () => {
    const rawValue = input.value.trim();
    const normalized = rawValue.toUpperCase();

    if (normalized === FINAL_PASSWORD || rawValue === "前额叶") {
      state.flags.theatreUnlocked = true;
      addLog("Theatre B 接受了索引词。档案没有结束，反而开始回写你已经看过的页面。");
      render();
      closeModal();
      return;
    }

    feedback.textContent = "封存层拒绝了这个词，像是只认某个更内部、更解剖学的叫法。";
  };

  submit.addEventListener("click", tryUnlock);
  input.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      tryUnlock();
    }
  });
}

function inspectRevision() {
  if (!state.flags.theatreUnlocked) {
    openModal(
      "页面改写痕迹",
      `
        <p class="modal-copy">
          现在还没有任何可供比对的快照。等你打开 Theatre B 后，外部页面才会开始露出第二层版本。
        </p>
      `,
    );
    return;
  }

  if (!state.flags.revisionSeen) {
    openModal(
      "页面改写痕迹",
      `
        <p class="modal-copy">
          差异还没有被你亲眼触发。先重新打开一次媒体报道页，你才会看见第一处明显的内容偏移。
        </p>
      `,
    );
    return;
  }

  openModal(
    "页面改写痕迹",
    `
      <p class="modal-copy">
        你保留下来的旧缓存和当前页面至少有三处大改动。奇怪的是，改写者没有删掉全部原稿，
        而是故意留出能让人追踪的裂口。
      </p>
      <ul class="fact-list">
        <li><strong>缓存句子</strong> · “controversial, yet humane”</li>
        <li><strong>当前句子</strong> · “humane was printed after the children stopped resisting”</li>
        <li><strong>新增痕迹</strong> · 页脚出现了未署名的输入光标与短暂闪现的日期格式</li>
      </ul>
      <p class="inline-note">
        这不像普通黑客，更像某个知道内部历史的人在逼你顺着指定线索往下查。
      </p>
    `,
  );
}

function inspectExchange() {
  if (!state.flags.revisionSeen) {
    openModal(
      "未署名留言",
      `
        <p class="modal-copy">
          现在还没有人留下可供对话的痕迹。先去触发那次页面差异，再回来尝试留言。
        </p>
      `,
    );
    return;
  }

  const transcript = buildConversationTranscript();
  const nextPrompt = datePrompts[state.conversationStage];

  openModal(
    "未署名留言",
    `
      <p class="modal-copy">
        你试着朝那一行闪烁的输入位留言。对方始终没有表明身份，只把回答缩成日期。
      </p>
      <ul class="fact-list">${transcript}</ul>
      ${
        nextPrompt
          ? `
            <div class="code-row">
              <button class="modal-button" id="exchange-submit">
                发送: ${nextPrompt.question}
              </button>
            </div>
          `
          : `
            <p class="inline-note">
              光标不再回话了。三组日期已经够它把整条路指给你看。
            </p>
          `
      }
    `,
  );

  const submit = document.querySelector("#exchange-submit");
  if (submit) {
    submit.addEventListener("click", revealNextDate);
  }
}

function inspectSearch() {
  if (state.conversationStage === 0) {
    openModal(
      "日期报道检索",
      `
        <p class="modal-copy">
          检索器本身是空的。你至少得先从未署名留言里拿到一个日期，才知道该搜哪天。
        </p>
      `,
    );
    return;
  }

  openModal(
    "日期报道检索",
    `
      <p class="modal-copy">
        旧报索引器只认日期。把对方塞给你的那几个日期输进去，看看当天到底刊出了什么。
      </p>
      <div class="code-row">
        <input
          class="code-input"
          id="search-date"
          type="text"
          maxlength="12"
          placeholder="1946-03-19"
          aria-label="输入报道日期"
        />
        <button class="modal-button" id="search-submit">检索报道</button>
      </div>
      <p class="feedback" id="search-feedback"></p>
      <p class="inline-note">
        已收到日期:
        <span class="success-copy">${getKnownDates().join(" / ")}</span>
      </p>
    `,
  );

  const input = document.querySelector("#search-date");
  const feedback = document.querySelector("#search-feedback");
  const submit = document.querySelector("#search-submit");
  input.focus();

  const searchArticle = () => {
    const normalized = normalizeDate(input.value.trim());
    const article = articleCatalog[normalized];

    if (!article) {
      feedback.textContent = "这一天没有能被索引器识别的报道条目。";
      return;
    }

    if (!isDateKnown(article.displayDate)) {
      feedback.textContent = "这个日期还没被那个改页的人交给你。";
      return;
    }

    showArticleResult(article);
  };

  submit.addEventListener("click", searchArticle);
  input.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      searchArticle();
    }
  });
}

function inspectDossier() {
  if (state.resolvedArticles.length < 3) {
    openModal(
      "艾丽莎档案拼接",
      `
        <p class="modal-copy">
          现在拼不出完整真相。三篇日期报道还没有全部被找回，官方叙述和被改写的叙述仍然缺口太大。
        </p>
        <p class="inline-note">
          继续向未署名操作者拿日期，再去做报道检索。
        </p>
      `,
    );
    return;
  }

  if (state.flags.truthUnlocked) {
    openModal(
      "艾丽莎档案拼接",
      `
        <p class="modal-copy">
          你已经把官方故事和真实故事拼在一起。最后剩下的只有一个签名:
          <span class="success-copy">J.M.</span>
        </p>
      `,
    );
    return;
  }

  openModal(
      "艾丽莎档案拼接",
      `
        <p class="modal-copy">
        三篇日期报道终于能拼成一条闭合的叙述了。公开档案与另一套残存叙述之间，真正冲突的不是细节，而是整个人生。
        </p>
      <ul class="fact-list">
        <li><strong>官方叙述</strong> · 艾丽莎在霍华德和珍妮的照料下康复，手术是成功范例。</li>
        <li><strong>另一套叙述</strong> · 艾丽莎是战争犹太遗孤，恐惧被误写成病，后续症状被手术与超量麻醉不断加重。</li>
        <li><strong>官方叙述</strong> · 1958 年冬季采访中，艾丽莎亲自证明了手术成效。</li>
        <li><strong>另一套叙述</strong> · 艾丽莎已于 1957 年冬天死在手术台上，镜头前的人其实是莉娜。</li>
        <li><strong>残余签名</strong> · 那些后写进去的更正几乎都避开自称，但最后留下了 <span class="success-copy">J.M.</span>。</li>
      </ul>
      <p class="inline-note">
        这两个首字母，与护理记录里长期陪护艾丽莎的 Jenny Moore 完全一致。
      </p>
      <div class="code-row">
        <button class="modal-button" id="dossier-submit">拼合最终档案</button>
      </div>
    `,
  );

  document.querySelector("#dossier-submit").addEventListener("click", () => {
    state.flags.truthUnlocked = true;
    addLog("三篇报道被拼回一条真实时间线，艾丽莎与莉娜的名字终于各自回到了原位。");
    render();
    closeModal();
  });
}

function showArticleResult(article) {
  if (hasResolvedArticle(article.id)) {
    openModal(
      `报道检索 / ${article.displayDate}`,
      article.alteredBody,
    );
    return;
  }

  openModal(
    `报道检索 / ${article.displayDate}`,
    `
      <p class="modal-copy">
        检索器先调出的是当天刊出的正式稿标题:
        <span class="success-copy">${article.officialLead}</span>
      </p>
      ${article.officialBody}
      <div class="code-row">
        <button class="modal-button" id="article-refresh">重新载入版面</button>
      </div>
    `,
  );

  document.querySelector("#article-refresh").addEventListener("click", () => {
    resolveArticle(article);
    openModal(
      `报道检索 / ${article.displayDate}`,
      article.alteredBody,
    );
  });
}

function openArchiveLibrary(title, intro, items, kind) {
  openModal(
    title,
    `
      <div class="library-intro">${intro}</div>
      <div class="library-grid">
        ${items
          .map(
            (item) => `
              <button
                class="library-button"
                data-archive-kind="${kind}"
                data-record-id="${item.id}"
              >
                <span class="library-topline">${item.date}</span>
                <strong>${item.title}</strong>
                <p class="library-summary">${item.summary}</p>
                ${
                  item.tags && item.tags.length > 0
                    ? `
                      <div class="library-tags">
                        ${item.tags
                          .map((tag) => `<span class="article-tag">${tag}</span>`)
                          .join("")}
                      </div>
                    `
                    : ""
                }
              </button>
            `,
          )
          .join("")}
      </div>
    `,
  );

  document.querySelectorAll(".library-button").forEach((button) => {
    button.addEventListener("click", () => {
      const archiveKind = button.dataset.archiveKind;
      const recordId = button.dataset.recordId;
      const record = findArchiveRecord(archiveKind, recordId);
      if (record) {
        openArchiveRecord(record, archiveKind);
      }
    });
  });
}

function openArchiveRecord(record, kind) {
  if (state.flags.breachMode && !isIntactRecord(record, kind)) {
    openCorruptedPage(record.title);
    return;
  }

  let showAltered = false;

  if (record.alteredBody) {
    if (state.alteredArticles.includes(record.id)) {
      showAltered = true;
    } else if (state.viewedArticles.includes(record.id)) {
      showAltered = true;
      state.alteredArticles.push(record.id);
    } else {
      state.viewedArticles.push(record.id);
    }
  }

  const bodyHtml = showAltered ? record.alteredBody : record.officialBody || record.bodyHtml;

  openModal(
    record.title,
    `
      <div class="article-shell">
        ${renderArticleMedia(record.media)}
        <div class="article-body">
          <p class="library-topline">${record.date}</p>
          ${
            record.tags && record.tags.length > 0
              ? `
                <div class="library-tags library-tags-inline">
                  ${record.tags.map((tag) => `<span class="article-tag">${tag}</span>`).join("")}
                </div>
              `
              : ""
          }
          ${bodyHtml}
        </div>
      </div>
      <div class="code-row">
        <button class="ghost-button" id="archive-back">返回列表</button>
      </div>
    `,
  );

  document.querySelector("#archive-back").addEventListener("click", () => {
    if (kind === "facility") {
      inspectFacilities();
      return;
    }
    if (kind === "staff") {
      inspectStaff();
      return;
    }

    if (kind === "report") {
      reopenReportLibraryByRecord(record.id);
    }
  });
}

function reopenReportLibraryByRecord(recordId) {
  if (reportArchives["daily-care"].items.some((item) => item.id === recordId)) {
    inspectDailyCare();
    return;
  }

  if (reportArchives.methods.items.some((item) => item.id === recordId)) {
    inspectMethods();
    return;
  }

  if (reportArchives["surgery-archive"].items.some((item) => item.id === recordId)) {
    inspectSurgeryArchive();
    return;
  }

  if (reportArchives.achievements.items.some((item) => item.id === recordId)) {
    inspectAchievements();
  }
}

function findArchiveRecord(kind, recordId) {
  if (kind === "facility") {
    return facilityFeatures.find((item) => item.id === recordId);
  }

  if (kind === "staff") {
    return getVisibleStaffProfiles().find((item) => item.id === recordId);
  }

  if (kind === "report") {
    const allReports = [
      ...reportArchives["daily-care"].items,
      ...reportArchives.methods.items,
      ...reportArchives["surgery-archive"].items,
      ...reportArchives.achievements.items,
    ];
    return allReports.find((item) => item.id === recordId);
  }

  return null;
}

function renderArticleMedia(media) {
  if (!media) {
    return "";
  }

  if (media.kind === "portrait") {
    return `
      <figure class="article-figure article-figure-portrait">
        <div class="portrait-plate">
          <div class="portrait-bust" aria-hidden="true"></div>
          <div class="portrait-initials">${media.initials}</div>
          <div class="portrait-role">${media.role}</div>
        </div>
        <figcaption>${media.caption}</figcaption>
      </figure>
    `;
  }

  return `
    <figure class="article-figure">
      <img
        src="${media.src}"
        alt="${media.alt}"
        loading="lazy"
        style="object-position: ${media.position || "50% 50%"};"
      />
      <figcaption>${media.caption}</figcaption>
    </figure>
  `;
}

function showHint() {
  openModal(
    "一点不算体贴的提示",
    `
      <p class="modal-copy">${getHint()}</p>
      <p class="inline-note">
        这条提示只会把你推近一点，不会替你把档案直接掀开。
      </p>
    `,
  );
}

function getObjectiveText() {
  const resolvedCount = state.resolvedArticles.length;

  if (state.endingMode === "peace") {
    return "故事已经被交给你了。";
  }

  if (state.endingMode === "rejected") {
    return "连接已终止。";
  }

  if (state.leahChatStarted || state.flags.leahRevealed) {
    return "Leah 正在等你的回答。想想你来到这里的初衷，再决定要不要把这些故事带出去。";
  }

  if (state.flags.breachMode) {
    return "页面正在塌陷。继续追索和艾丽莎有关的档案，其他栏目已经不再可靠。";
  }

  if (!state.flags.admissionsSeen) {
    return "先看接收政策，找出 Blackthorn Hall 第一次向普通民众开放的年份。";
  }

  if (!state.flags.terminalUnlocked) {
    return "把平民开放年份输入馆藏终端，拿到内部目录的第一层权限。";
  }

  if (!state.flags.pressSeen) {
    return "再去看媒体报道，确认人道主义批评里提到的治疗升级顺序。";
  }

  if (!state.flags.treatmentSolved) {
    return "按报道留下的路径，重建被删改的治疗目录。";
  }

  if (!state.flags.directorNoteKnown) {
    return "目录已开，回到院长介绍页，找 staff marginalia 里的真正索引词。";
  }

  if (!state.flags.theatreUnlocked) {
    return "用院长页里的解剖学索引词打开 Theatre B 的封存手术记录。";
  }

  if (!state.flags.revisionSeen) {
    return "重新打开一次媒体报道。Theatre B 之后，外部页面开始和你刚才看到的不一样了。";
  }

  if (state.conversationStage === 0) {
    return "尝试和改页的人留言。对方不说原因，但显然想把你引向别的东西。";
  }

  if (resolvedCount < 3) {
    if (state.conversationStage > resolvedCount) {
      return "把刚收到的日期输入报道检索，查看那天刊出的医院文章。";
    }

    return "那篇日期文章已经看完了，回到留言页再追问一次，对方还会再给你一个日期。";
  }

  if (!state.flags.truthUnlocked) {
    return "三篇日期报道都齐了。去“艾丽莎档案拼接”里把官方故事和真实故事拼回去。";
  }

  return "档案终于闭合，但它把你也写进了最后的见证位。";
}

function getArchiveStatus() {
  if (state.flags.breachMode) {
    return "页面层级: unauthorized query detected";
  }

  if (state.flags.truthUnlocked) {
    return "页面层级: 伪造报道已坍塌";
  }

  if (state.resolvedArticles.length > 0) {
    return "页面层级: 日期报道冲突中";
  }

  if (state.flags.revisionSeen) {
    return "页面层级: live overwrite detected";
  }

  if (state.flags.theatreUnlocked) {
    return "页面层级: Theatre B 已展开";
  }

  if (state.flags.treatmentSolved) {
    return "页面层级: 封存层待输入索引词";
  }

  if (state.flags.terminalUnlocked) {
    return "页面层级: staff-only 目录已解锁";
  }

  return "页面层级: 公开介绍";
}

function getTraceStatus() {
  if (state.leahChatStarted || state.flags.leahRevealed) {
    return "系统反馈: 外部接入已结束，当前通道由 Leah 保持。";
  }

  if (state.flags.breachMode) {
    return "系统反馈: identity query rejected";
  }

  if (state.flags.truthUnlocked) {
    return "系统反馈: 第二操作者离线，仅留下 J.M.";
  }

  if (state.conversationStage > 0) {
    return "系统反馈: 第二操作者仍在逐行写入日期";
  }

  if (state.flags.revisionSeen) {
    return "系统反馈: 缓存版本与当前版本不一致";
  }

  if (state.flags.directorNoteKnown) {
    return "系统反馈: staff marginalia 正在主动浮出";
  }

  if (state.flags.terminalUnlocked) {
    return "系统反馈: 目录开始回看你的检索习惯";
  }

  return "系统反馈: 档案暂未注意到你";
}

function getHint() {
  const resolvedCount = state.resolvedArticles.length;

  if (state.flags.breachMode) {
    return "别在坏掉的栏目里停留。现在还能保持完整的，只有和艾丽莎直接相关的档案。";
  }

  if (!state.flags.admissionsSeen) {
    return "先去看接收政策页。年份不是建院时间，而是医院第一次对普通民众开放的那一年。";
  }

  if (!state.flags.terminalUnlocked) {
    return "馆藏终端要的是平民开放年份，答案就在 admissions charter 的修订条款里。";
  }

  if (!state.flags.pressSeen) {
    return "内部目录打开后，别急着去碰最终封存层，先看媒体报道留下的治疗升级路径。";
  }

  if (!state.flags.treatmentSolved) {
    return "批评文章把顺序说得很白: 从镇静，到电流，再到前额叶手术。";
  }

  if (!state.flags.directorNoteKnown) {
    return "治疗目录开了以后，院长介绍页会多出 staff-only 的边缘批注。";
  }

  if (!state.flags.theatreUnlocked) {
    return "最终答案不是 lobotomy，而是 Hargreaves 用来归档的那个更内部的词。";
  }

  if (!state.flags.revisionSeen) {
    return "Theatre B 打开以后，去重新看一次媒体报道。真正的第二幕从页面差异开始。";
  }

  if (state.conversationStage === 0) {
    return "去“未署名留言”发问。对方不会自我介绍，只会给你日期。";
  }

  if (resolvedCount < 3) {
    if (state.conversationStage > resolvedCount) {
      return "把最新日期直接输进“日期报道检索”。如果文章看起来太干净，就刷新它。";
    }

    return "这一轮日期你已经看过了，回到留言页继续追问，对方还会再丢给你下一天。";
  }

  if (!state.flags.truthUnlocked) {
    return "最后一步不是再搜一次，而是把三篇报道拼成一条完整叙述。";
  }

  return "档案已经全部打开了。";
}

function pressTreatmentStep(step) {
  const expected = TREATMENT_SEQUENCE[state.sequenceProgress.length];

  if (step !== expected) {
    state.sequenceProgress = [];
    addLog("治疗目录顺序重建失败，缓存回滚，页面像在故意让你重新来一遍。");
    return;
  }

  state.sequenceProgress.push(step);

  if (state.sequenceProgress.length === TREATMENT_SEQUENCE.length) {
    state.flags.treatmentSolved = true;
    state.sequenceProgress = [];
    addInventory("seal");
    addLog("删改条目终于对齐，Theatre B 的内部封签从目录尾部掉了出来。");
    return;
  }

  addLog(`你对上了第 ${state.sequenceProgress.length} 个治疗节点，残缺目录继续展开。`);
}

function revealNextDate() {
  const prompt = datePrompts[state.conversationStage];
  if (!prompt) {
    return;
  }

  state.conversationStage += 1;
  addClue(prompt.clueId);
  addLog(`未署名操作者没有回话，只留下一个日期: ${prompt.date}。`);
  render();
  inspectExchange();
}

function resolveArticle(article) {
  if (hasResolvedArticle(article.id)) {
    return;
  }

  state.resolvedArticles.push(article.id);
  article.clueIds.forEach((clueId) => addClue(clueId));
  addLog(article.log);
  render();
}

function formatSequenceProgress() {
  if (state.sequenceProgress.length === 0) {
    return "无";
  }

  const labels = {
    sedation: "镇静",
    current: "电流",
    prefrontal: "前额叶",
  };

  return state.sequenceProgress.map((step) => labels[step]).join(" / ");
}

function buildConversationTranscript() {
  const lines = [];

  for (let index = 0; index < state.conversationStage; index += 1) {
    const prompt = datePrompts[index];
    lines.push(`<li><strong>Dr. Mercer</strong> · ${prompt.question}</li>`);
    lines.push(`<li><strong>Unknown</strong> · ${prompt.date}</li>`);
  }

  if (lines.length === 0) {
    lines.push("<li><strong>System</strong> · 光标在页脚一闪一闪，像在等你先开口。</li>");
  }

  return lines.join("");
}

function openLeahRecord() {
  if (!state.flags.leahRevealed) {
    state.flags.leahRevealed = true;
    addLog("三个日期被一同送回搜索栏后，页面跳进了一份只署名 Leah 的黑色记录。");
    render();
  }

  openModal(
    "",
    `
      <div class="void-record">
        <p class="void-kicker">recovered internal memorandum</p>
        <h3 class="void-title">Elisa / Ward East / Theatre B / Final Consolidated Note</h3>
        <p class="modal-copy void-copy">
          艾丽莎是二战后的犹太遗孤。她七岁时被转送到 Blackthorn Hall，随身几乎没有任何能证明家庭关系的纸张，
          只有断裂的语言、夜间惊醒、对陌生房间的强烈退避和一遇到制服就会立刻僵住的反应。她初入病房时并不会流利英语，
          很长时间只能用动作、抓握被角和对固定物件的指认来表达自己。对一间真正愿意处理儿童创伤的机构来说，
          这些现象本应首先被理解成战争留下的恐惧与失序；但在 Blackthorn Hall，它们很快被改写进病案分类，
          从拒绝接触、语言滞涩、夜惊，变成“持续性判断障碍”“早发精神分裂征候”和“需要更深干预的儿童个案”。
        </p>
        <p class="modal-copy void-copy">
          我被外聘来这里，是因为战后各地都开始意识到儿童创伤不能只按成人精神病学处理。我的意见一直很简单:
          对这样的孩子，稳定、可预期的环境与非惩罚性的关系远比电击和冷式管理重要；如果她的语言还在异乡和恐惧之间打结，
          那么首先要做的不是修正她，而是给她一个不需要立刻顺从的空间。可医院真正需要的并不是理解，
          而是可以被记录、被比较、被继续推进的“改善”。他们会接受我写下的观察，但只保留其中有利于秩序的部分；
          会容忍我主张延缓治疗升级，却不会允许这种主张真正阻断任何既定路径。
        </p>
        <p class="modal-copy void-copy">
          霍华德并不急躁，甚至总显得极为克制，这恰恰是最危险的地方。他从不把自己说成残酷的人，
          他只会把每一步都写成不得不做的理性选择。先是更严格的作息、图卡和短答训练，再是更频繁的观察与电流疗法，
          再后来是胰岛素休息方案与复审会议。艾丽莎的每一次迟缓、每一次服从、每一次不再尖叫，都被写成稳定的证据，
          而很少有人愿意承认那些证据也可能只是疲惫、药物和恐惧的结果。到了后期，所谓精神分裂的很多表现，
          在我看来更像反复术前处理和麻药计量失衡后留下的断片与错位，可这些意见从未真正留在正式结论里。
        </p>
        <p class="modal-copy void-copy">
          珍妮并不是这套制度的设计者，但她被迫成为最靠近伤口的人。她知道病房里哪些故事适合被记者看见，
          哪些夜巡记录必须压回抽屉，也知道有些孩子的“恢复”只是学会了在所有集体动作里先模仿别人。
          艾丽莎后来频繁在走廊对着空气说话，被当成病情恶化的证据；可我始终不相信那只是幻觉。
          从我死后开始，楼里发生过太多无法按量表解释的事: 走廊尽头出现并不存在的脚步，病房值班时有人听见并不存在的应答，
          某些本该封存的字句总会重新出现在版面边缘。医院把这些都写成病例特征，我却更愿意把它们理解成被压下去的事实在回声。
        </p>
        <p class="modal-copy void-copy">
          霍华德后来注意到我不再只是反对，而是在想办法把院内情况传出去。我确实做过这件事。匿名给报社寄材料，
          把最安全的日期、最含混的标题和最难被立即追溯的片段留给外界，希望有人能从碎片里看出病房真正发生了什么。
          他没有正面与我争执，因为那会留下太清楚的痕迹。他只是让珍妮在我的水里加入过量安眠药。
          医院把我的死处理得像一次安静、体面的身体衰竭，好像一名外聘心理专家只是恰好没有撑过长期劳累。
          但我知道，从那以后，这里再没有任何人能从内部用正常名字反对他们。
        </p>
        <p class="modal-copy void-copy">
          艾丽莎最终死在 1957 年冬天的前额叶手术台上。此后面对媒体来访，医院找来了身形相近的莉娜，
          让她穿上相似的外套，坐到靠窗的位置，背下那些足以让访客满意离开的短句。那篇后来被广泛引用的成功报道，
          从头到尾都没有一句真正属于艾丽莎的话。莉娜自己不久后又在半夜突发心梗去世，尽管此前从没有任何心脏问题的诊断记录。
          到这一步，医院已经不只是纠正病例，而是在用另一条生命继续维护上一条生命被伪造出来的结论。
        </p>
        <p class="modal-copy void-copy">
          外界压力最终逼迫 Blackthorn Hall 关闭，但关闭从来不等于停止。你如果还在这里，就说明某些试验并没有真正结束，
          只是从正式病房退到了更小、更隐蔽、更不需要对公众解释的地方。机构会死，楼会空，门牌会落灰，
          可一套已经学会如何把人改写成病例、把病例改写成成果的逻辑，不会因为一张停运公告就自动消失。
        </p>
        <p class="void-signature">Leah</p>
        <div class="code-row">
          <button class="modal-button" id="close-leah-record">关闭记录</button>
        </div>
      </div>
    `,
    "leah-record",
  );

  document.querySelector("#close-leah-record").addEventListener("click", () => {
    closeModal();
  });
}

function getSearchHintText() {
  if (state.flags.breachMode) {
    if (state.resolvedArticles.length >= 3 && !state.flags.leahRevealed) {
      return "把那三篇报道的日期一起输进搜索栏。";
    }

    if (state.flags.leahRevealed) {
      return "员工介绍页里多出了一个名字：Leah。";
    }

    return "只有和艾丽莎有关的页面还在正常响应。";
  }

  if (state.flags.revisionSeen && state.identitySearchCount === 0) {
    return "检索栏里像被人敲出一句短短的话：你是谁。";
  }

  if (state.identitySearchCount > 0) {
    return "搜索框像仍在等那句话被重新敲一次。";
  }

  return "可检索日期、人物、手术、病区和主线关键词。";
}

function openLeahChat() {
  const transcript =
    state.leahChatHistory.length === 0
      ? `<li><strong>Leah</strong> · 你来这里有什么目的？</li>`
      : state.leahChatHistory
          .map(
            (entry) => `<li><strong>${entry.speaker}</strong> · ${entry.text}</li>`,
          )
          .join("");

  openModal(
    "Leah",
    `
      <div class="chat-record">
        <ul class="fact-list">${transcript}</ul>
        <div class="code-row">
          <input
            class="code-input"
            id="leah-chat-input"
            type="text"
            placeholder="输入你的身份、来意或回答"
            aria-label="输入给 Leah 的回复"
          />
          <button class="modal-button" id="leah-chat-send">发送</button>
        </div>
      </div>
    `,
    "leah-chat",
  );

  const input = document.querySelector("#leah-chat-input");
  const submit = document.querySelector("#leah-chat-send");
  input.focus();

  const send = () => {
    const value = input.value.trim();
    if (!value) {
      return;
    }

    processLeahChat(value);
  };

  submit.addEventListener("click", send);
  input.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      send();
    }
  });
}

function processLeahChat(message) {
  state.leahChatStarted = true;
  state.leahChatHistory.push({ speaker: "Dr. Mercer", text: message });

  const normalized = normalizeSearchText(message);

  if (state.leahChatStage === 0) {
    if (
      normalized.includes("我是") ||
      normalized.includes("调查") ||
      normalized.includes("研究") ||
      normalized.includes("记录") ||
      normalized.includes("真相") ||
      normalized.includes("来意") ||
      normalized.includes("目的")
    ) {
      state.leahChatHistory.push({
        speaker: "Leah",
        text: "你认为人的灵魂是可以通过手术修复的吗？",
      });
      state.leahChatStage = 1;
    } else {
      state.leahChatHistory.push({
        speaker: "Leah",
        text: "你来这里有什么目的？",
      });
    }

    openLeahChat();
    return;
  }

  if (state.leahChatStage === 1) {
    if (
      normalized.includes("不能") ||
      normalized.includes("不可以") ||
      normalized.includes("不是") ||
      normalized.includes("不认为")
    ) {
      state.leahChatHistory.push({
        speaker: "Leah",
        text: "那我希望这些故事可以被记住。",
      });
      state.leahChatStage = 2;
      openLeahChat();
      return;
    }

    if (
      normalized.includes("可以") ||
      normalized.includes("能") ||
      normalized.includes("是的") ||
      normalized.includes("可以修复")
    ) {
      state.endingMode = "rejected";
      closeModal();
      render();
      return;
    }

    state.leahChatHistory.push({
      speaker: "Leah",
      text: "你来这里有什么目的？",
    });
    openLeahChat();
    return;
  }

  if (state.leahChatStage === 2) {
    if (
      normalized.includes("记住") ||
      normalized.includes("流传") ||
      normalized.includes("传下去") ||
      normalized.includes("讲出去") ||
      normalized.includes("不会忘") ||
      normalized.includes("告诉") ||
      normalized.includes("公开")
    ) {
      state.leahChatHistory.push({
        speaker: "Leah",
        text: "你是个善良的人，我存在的意义也就在这里了......",
      });
      state.endingMode = "peace";
      closeModal();
      render();
      return;
    }

    state.leahChatHistory.push({
      speaker: "Leah",
      text: "你来这里有什么目的？",
    });
    openLeahChat();
  }
}

function renderEndingScreen() {
  if (!state.endingMode) {
    dom.ending.classList.add("hidden");
    dom.endingCard.innerHTML = "";
    return;
  }

  if (state.endingMode === "rejected") {
    dom.endingCard.innerHTML = `
      <p class="eyebrow">Connection Terminated</p>
      <h2>你被踢出了服务器。</h2>
      <p>
        屏幕在一瞬间收紧成黑色，只剩一行猩红的系统字:
        <span>unauthorized spiritual response detected</span>
      </p>
      <p>
        档案站没有再给你留下任何解释。你最后看到的，只有搜索栏里还来不及清除的那句话:
        <span>你认为人的灵魂是可以通过手术修复的吗？</span>
      </p>
      <button class="primary-button" id="replay-button">重新进入档案</button>
    `;
  } else {
    dom.endingCard.innerHTML = `
      <p class="eyebrow">Transmission Preserved</p>
      <h2>Leah 的声音终于安静了下来。</h2>
      <p>
        她最后留给你的话只剩一句:
        <span>“你是个善良的人，我存在的意义也就在这里了......”</span>
      </p>
      <p>
        页面没有再继续崩坏。那些与艾丽莎有关的报道、Leah 的黑色备忘录、被抹去的名字与替代的身影，
        都安静地停在原位，像是终于找到了愿意把它们带出这栋楼的人。
      </p>
      <p>
        你知道这不是结案，只是传递的开始。
      </p>
      <button class="primary-button" id="replay-button">重新进入档案</button>
    `;
  }

  dom.ending.classList.remove("hidden");
  dom.endingCard.querySelector("#replay-button").addEventListener("click", resetGame);
}

function getKnownDates() {
  return datePrompts.slice(0, state.conversationStage).map((item) => item.date);
}

function normalizeSearchText(value) {
  return value.toLowerCase().replace(/[^a-z0-9\u4e00-\u9fa5]/g, "");
}

function normalizeDate(value) {
  return value.replace(/\D/g, "");
}

function stripHtml(value) {
  return value.replace(/<[^>]+>/g, " ");
}

function isIntactTarget(target) {
  if (target === "staff" && state.flags.leahRevealed) {
    return true;
  }

  return intactTargets.has(target);
}

function isIntactRecord(record, kind) {
  if (kind === "staff") {
    return (
      record.id === "staff-howard" ||
      record.id === "staff-jenny" ||
      (state.flags.leahRevealed && record.id === "staff-leah")
    );
  }

  if (kind === "facility") {
    return record.id === "facility-child-dormitory" || record.id === "facility-theatre-b";
  }

  if (kind === "report") {
    const tags = record.tags || [];
    return tags.some((tag) => ["艾丽莎", "霍华德", "珍妮", "莉娜"].includes(tag));
  }

  return false;
}

function isIntactSearchEntry(entry) {
  if (entry.type === "page") {
    return isIntactTarget(entry.target);
  }

  if (entry.type === "record") {
    const record = findArchiveRecord(entry.recordKind, entry.recordId);
    return record ? isIntactRecord(record, entry.recordKind) : false;
  }

  return false;
}

function getTargetLabel(target) {
  const labels = {
    history: "医院沿革",
    admissions: "接收政策",
    facilities: "医院设施",
    staff: "医护人员",
    director: "院长介绍",
    press: "媒体报道",
    terminal: "馆藏终端",
    treatment: "治疗目录",
    revision: "页面改写痕迹",
    exchange: "未署名留言",
  };

  return labels[target] || "档案页";
}

function corruptText(text, intensity) {
  const source = [...text];
  const seed = state.breachPulse + text.length;
  const blockCount = text.length > 18 ? 2 : 1;

  for (let blockIndex = 0; blockIndex < blockCount; blockIndex += 1) {
    const ratio = intensity + blockIndex * 0.08;
    const blockLength = Math.max(2, Math.floor(text.length * ratio));
    const maxStart = Math.max(0, text.length - blockLength);
    const start = maxStart === 0 ? 0 : (seed * (blockIndex + 3) * 7) % maxStart;

    for (let index = start; index < start + blockLength && index < source.length; index += 1) {
      if (source[index] === " " || source[index] === "·" || source[index] === "—") {
        continue;
      }

      source[index] = index % 2 === 0 ? "/" : "#";
    }
  }

  return source.join("");
}

function syncBreachTicker() {
  if (!state.flags.breachMode) {
    stopBreachTicker();
    return;
  }

  if (breachIntervalId) {
    return;
  }

  breachIntervalId = setInterval(() => {
    state.breachPulse = (state.breachPulse + 1) % 11;
    renderPortals();
  }, 880);
}

function stopBreachTicker() {
  if (!breachIntervalId) {
    return;
  }

  clearInterval(breachIntervalId);
  breachIntervalId = null;
}

function isDateKnown(date) {
  return getKnownDates().includes(date);
}

function containsAllCoreDates(query) {
  const normalized = normalizeDate(query);
  return ["19460319", "19520611", "19580203"].every((date) => normalized.includes(date));
}

function hasResolvedArticle(articleId) {
  return state.resolvedArticles.includes(articleId);
}

function getVisibleStaffProfiles() {
  if (state.flags.leahRevealed) {
    return staffProfiles;
  }

  return staffProfiles.filter((record) => record.id !== "staff-leah");
}

function addInventory(itemId) {
  if (!state.inventory.includes(itemId)) {
    state.inventory.push(itemId);
  }
}

function addClue(clueId) {
  if (!state.clues.includes(clueId)) {
    state.clues.push(clueId);
  }
}

function addLog(entry) {
  state.logs.push(entry);
}

function openModal(title, content, modalType = "default") {
  state.currentModalType = modalType;
  dom.modalTitle.textContent = title;
  dom.modalBody.innerHTML = content;
  applyStoryHighlights(dom.modalBody);
  dom.modalBackdrop.classList.remove("hidden");
}

function closeModal() {
  const shouldOpenLeahChat =
    state.currentModalType === "leah-record" &&
    !state.leahChatStarted &&
    !state.endingMode;

  state.currentModalType = null;
  dom.modalBackdrop.classList.add("hidden");
  dom.modalBody.innerHTML = "";

  if (shouldOpenLeahChat) {
    openLeahChat();
  }
}

function applyStoryHighlights(root) {
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
  const textNodes = [];

  while (walker.nextNode()) {
    const node = walker.currentNode;
    if (node.textContent.trim()) {
      textNodes.push(node);
    }
  }

  textNodes.forEach((node) => highlightTextNode(node));
}

function highlightTextNode(node) {
  const text = node.textContent;
  const fragment = document.createDocumentFragment();
  let cursor = 0;

  while (cursor < text.length) {
    const nextMatch = findNextStoryMatch(text, cursor);

    if (!nextMatch) {
      fragment.appendChild(document.createTextNode(text.slice(cursor)));
      break;
    }

    if (nextMatch.index > cursor) {
      fragment.appendChild(document.createTextNode(text.slice(cursor, nextMatch.index)));
    }

    const span = document.createElement("span");
    span.className = nextMatch.className;
    span.textContent = nextMatch.match[0];
    fragment.appendChild(span);
    cursor = nextMatch.index + nextMatch.match[0].length;
  }

  node.parentNode.replaceChild(fragment, node);
}

function findNextStoryMatch(text, startIndex) {
  let earliest = null;

  storyHighlights.forEach(({ pattern, className }) => {
    pattern.lastIndex = startIndex;
    const match = pattern.exec(text);

    if (!match || match.index === undefined) {
      return;
    }

    if (!earliest || match.index < earliest.index) {
      earliest = {
        index: match.index,
        match,
        className,
      };
    }
  });

  return earliest;
}

boot();
