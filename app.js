/* HNCMA draft site — language switching, routing, draft-only actions.
   No data is sent or stored anywhere (except the chosen language in localStorage). */
(function () {
  'use strict';

  const TBC_EN = (t) => `<span class="tbc">TBC${t ? ' · ' + t : ''}</span>`;
  const TBC_ZH = (t) => `<span class="tbc">待确认${t ? ' · ' + t : ''}</span>`;

  const T = {
    draftBar: {
      en: 'Draft for review — not a published website. Items marked <span class="tbc">TBC</span> are awaiting confirmation.',
      zh: '审阅草稿——网站尚未发布。标有 <span class="tbc">待确认</span> 的内容需进一步确认。'
    },
    brandSub: { en: 'Fire Needle Professional Association · Melbourne', zh: '火针专业学会 · 墨尔本' },
    menu: { en: 'Menu', zh: '菜单' },
    joinCta: { en: 'Membership', zh: '入会' },
    navHome: { en: 'Home', zh: '首页' },
    navAbout: { en: 'About', zh: '关于学会' },
    navFire: { en: 'Fire needle therapy', zh: '火针介绍' },
    navTraining: { en: 'Training & exchange', zh: '培训交流' },
    navMembership: { en: 'Membership', zh: '会员' },
    navContact: { en: 'Contact', zh: '联系我们' },
    tileFire: { en: 'What is fire needle therapy?', zh: '什么是火针疗法' },

    heroEyebrow: { en: 'Melbourne, Australia', zh: '澳大利亚 · 墨尔本' },
    heroTitle: { en: 'Advancing the practice of fire needle therapy', zh: '传承与发展火针疗法' },
    heroLede: {
      en: 'HNCMA is a professional association being established in Melbourne for practitioners of fire needle therapy, with a focus on education, technical exchange and safe, ethical practice.',
      zh: 'HNCMA 是在墨尔本筹建中的火针专业学会，面向从事火针疗法的专业人员，专注于专业教育、技术交流，以及安全、规范的执业。'
    },
    heroCta1: { en: 'About the association', zh: '了解学会' },
    heroCta2: { en: 'What is fire needle therapy?', zh: '认识火针' },

    introTitle: { en: 'A professional home for fire needle practitioners', zh: '火针从业者的专业平台' },
    introBody: {
      en: 'Fire needle therapy (<i>huǒ zhēn</i>) is a traditional acupuncture technique in which a specially made needle is heated before it is applied. HNCMA aims to bring practitioners together to share technique, develop training and uphold professional standards.',
      zh: '火针是一种传统针刺技法：将特制针具烧热后施针。HNCMA 希望把从业者联系在一起，交流技术、发展培训，并共同维护专业标准。'
    },
    introNote: {
      en: 'Registration status of the association: ' + TBC_EN(),
      zh: '学会注册状态：' + TBC_ZH()
    },
    exploreTitle: { en: 'Explore HNCMA', zh: '走进学会' },
    pillarsEyebrow: { en: 'Proposed focus areas ' + TBC_EN(), zh: '拟定工作方向 ' + TBC_ZH() },
    p1t: { en: 'Education', zh: '专业教育' },
    p1b: { en: 'Training in fire needle technique for registered health professionals.', zh: '为注册卫生专业人员提供火针技术培训。' },
    p2t: { en: 'Exchange', zh: '学术交流' },
    p2b: { en: 'Academic exchange on TCM and fire needle therapy, in Australia and internationally.', zh: '在澳洲及国际范围开展中医与火针学术交流。' },
    p3t: { en: 'Professional community', zh: '专业社群' },
    p3b: { en: 'A network where practitioners can share experience and discuss practice with peers.', zh: '让从业者分享经验、与同行切磋的专业网络。' },
    joinTitle: { en: 'Interested in joining?', zh: '有意加入？' },
    joinBody: {
      en: 'Membership is intended for registered TCM practitioners, acupuncturists and other registered health professionals. Details are still being finalised.',
      zh: '会员面向注册中医师、针灸师及其他注册卫生专业人员。具体细则仍在确定中。'
    },
    joinCta2: { en: 'View membership', zh: '查看会员信息' },

    aboutTitle: { en: 'About HNCMA', zh: '关于 HNCMA' },
    aboutLede: {
      en: 'HNCMA is an academic and professional association focused on fire needle therapy in traditional Chinese medicine (TCM). Its purpose is to promote and share fire needle technique and to provide professional training for TCM practitioners, acupuncturists and other registered health professionals.',
      zh: 'HNCMA 是以中医火针为核心的学术与专业学会，宗旨是推广与交流火针技术，并为中医师、针灸师及其他注册卫生专业人员提供专业培训。'
    },
    factsTitle: { en: 'At a glance', zh: '基本信息' },
    fBasedK: { en: 'Based in', zh: '所在地' },
    fBasedV: { en: 'Melbourne, Victoria, Australia', zh: '澳大利亚维多利亚州墨尔本' },
    fNameK: { en: 'Full name', zh: '正式名称' },
    fNameV: { en: TBC_EN('full name of HNCMA'), zh: TBC_ZH('学会中英文全称') },
    fStatusK: { en: 'Legal status', zh: '法律性质' },
    fStatusV: { en: TBC_EN('registration in Victoria'), zh: TBC_ZH('维州注册情况') },
    fPeopleK: { en: 'Leadership', zh: '负责人 / 理事会' },
    fPeopleV: { en: TBC_EN('names, roles and registrations'), zh: TBC_ZH('姓名、职务及注册资格') },
    fWhoK: { en: 'For', zh: '面向' },
    fWhoV: {
      en: 'TCM practitioners, acupuncturists and other registered health professionals',
      zh: '中医师、针灸师及其他注册卫生专业人员'
    },
    futureTitle: { en: 'Looking ahead', zh: '未来设想' },
    futureBody: {
      en: 'The founders have discussed future plans, including a publication on fire needle therapy, expanded training and collaboration with other professional bodies. These are aspirations rather than current services, and will be announced here only once confirmed.',
      zh: '学会发起人曾提出若干未来设想，包括出版火针专著、扩大培训规模，以及与其他专业团体合作。以上均为设想，并非现有服务，确定后才会在此公布。'
    },

    fireTitle: { en: 'What is fire needle therapy?', zh: '什么是火针疗法？' },
    fireLede: {
      en: 'Fire needle therapy uses specially made needles of varying thickness. The needle tip is heated over a flame until red-hot, then quickly inserted at acupuncture points, <i>Ashi</i> (tender) points or affected areas of the body.',
      zh: '火针疗法使用粗细不同的特制针具，将针尖在火焰上烧至通红后，迅速刺入腧穴、阿是穴或病变部位。'
    },
    histTitle: { en: 'Origins and history', zh: '起源与历史' },
    histBody: {
      en: 'Fire needling is a heat-based technique developed by Chinese practitioners through long experience, and is thought to have been inspired by the warming effect of moxibustion. Its development is linked to early metalworking: according to historical records, metal smelting appeared in China around 3000 BCE and became more advanced during the Warring States period and the Qin and Han dynasties. Many TCM scholars therefore date the maturing of fire needle technique to roughly 475–221 BCE, some 2,200 to 2,500 years ago.',
      zh: '火针是中国先民在长期实践中，受火灸驱寒的启发而发展出的温热刺法。其发展与金属冶炼密切相关：据史料记载，中国的金属冶炼约在公元前 3000 年出现，至春秋战国及秦汉时期日趋成熟。因此许多中医学者认为，火针技术约成熟于公元前 475—前 221 年，距今约 2200—2500 年。'
    },
    histNote: {
      en: 'Historical dating as provided by the association. ' + TBC_EN('references to be added'),
      zh: '历史年代据学会提供资料。' + TBC_ZH('需补充文献出处')
    },
    theoryTitle: { en: 'How TCM theory describes it', zh: '中医传统理论中的火针' },
    theoryIntro: {
      en: 'In traditional Chinese medicine theory, fire needling is described in terms of the actions below. These are traditional concepts, not claims of clinical effectiveness.',
      zh: '在中医传统理论中，火针以下列作用来描述。以下为传统理论表述，并非临床疗效承诺。'
    },
    t1: { en: 'Supporting vital qi and dispelling pathogenic factors', zh: '扶正祛邪' },
    t2: { en: 'Warming the middle and dispersing cold', zh: '温中散寒' },
    t3: { en: 'Eliminating dampness', zh: '祛除湿毒' },
    t4: { en: 'Promoting blood circulation and removing stasis', zh: '活血化瘀' },
    t5: { en: 'Reducing swelling and relieving pain', zh: '消肿止痛' },
    t6: { en: 'Removing the old and promoting new tissue', zh: '祛腐生肌' },
    t7: { en: 'Softening hardness and dispersing nodules', zh: '软坚散结' },
    safetyTitle: { en: 'Safety and common reactions', zh: '安全与常见反应' },
    safetyBody: {
      en: 'Commonly reported reactions include mild redness, swelling, itching or stinging at the treatment site. Some people develop a small nodule at the needle point two to three days later, or a small scar several days later. These usually settle without special treatment within about five to seven days.',
      zh: '常见反应包括施针部位轻度红肿、瘙痒或刺痛。少数人在针后二三天出现小硬结，或数日后留下细小瘢痕。一般无需特殊处理，约五至七天明显好转。'
    },
    safetyAdvice: {
      en: 'Fire needling should only be performed by an appropriately registered and trained practitioner. Discuss the risks with your practitioner before treatment, particularly if you have a medical condition. ' + TBC_EN('wording under professional review'),
      zh: '火针应由具备相应注册资格并受过训练的从业者操作。治疗前请与从业者充分沟通风险，尤其是本身有健康问题者。' + TBC_ZH('措辞待专业审核')
    },
    reviewTitle: { en: 'Under professional review', zh: '专业审核中' },
    reviewBody: {
      en: 'The association has supplied further material, including conditions for which fire needling is used and clinical case reports. Under Australian health advertising requirements, this material will be published only after professional review of the supporting evidence.',
      zh: '学会另提供了火针适用病症及临床病例等资料。依照澳大利亚卫生广告相关规定，这部分内容须经专业人士审核其证据后方可发布。'
    },

    trainTitle: { en: 'Training and exchange', zh: '培训与交流' },
    trainLede: {
      en: 'HNCMA plans to offer professional training in fire needle technique and to host academic exchange. Programs, dates and fees have not yet been set.',
      zh: 'HNCMA 计划开展火针技术专业培训并举办学术交流。课程、日期与费用尚未确定。'
    },
    planned: { en: 'Planned', zh: '筹划中' },
    c1t: { en: 'Professional training', zh: '专业培训' },
    c1b: {
      en: 'Fire needle technique training for TCM practitioners, acupuncturists and other eligible registered health professionals. ' + TBC_EN('curriculum, trainers, format'),
      zh: '面向中医师、针灸师及其他符合条件的注册卫生专业人员的火针技术培训。' + TBC_ZH('课程、讲师、形式')
    },
    c2t: { en: 'Academic exchange', zh: '学术交流' },
    c2b: {
      en: 'Exchange activities on TCM and fire needle therapy with practitioners in Australia and overseas.',
      zh: '与澳洲及海外同行开展中医与火针学术交流活动。'
    },
    c3t: { en: 'Certificates of completion', zh: '结业证书' },
    c3b: {
      en: 'Participants who complete an HNCMA course will receive a certificate of completion. Recognition for CPD: ' + TBC_EN(),
      zh: '完成学会课程者将获颁结业证书。可否计入 CPD 学分：' + TBC_ZH()
    },
    eventsTitle: { en: 'Upcoming courses and events', zh: '近期课程与活动' },
    noEvents: { en: 'No courses or events have been scheduled yet.', zh: '目前尚无已排定的课程或活动。' },
    interestBtn: { en: 'Register interest (draft)', zh: '登记意向（草稿）' },

    memTitle: { en: 'Membership', zh: '会员' },
    memLede: {
      en: 'Membership is intended for registered health professionals with an interest in fire needle therapy. Categories, fees and the application process are still being finalised.',
      zh: '会员面向对火针疗法有兴趣的注册卫生专业人员。会员类别、会费及申请流程仍在确定中。'
    },
    eligTitle: { en: 'Who may be eligible', zh: '拟定入会资格' },
    elig1: { en: 'TCM practitioners and acupuncturists registered in their country or region', zh: '在所在国家或地区注册的中医师、针灸师' },
    elig2: { en: 'General practitioners (GPs) and physiotherapists registered with a national or regional health authority', zh: '在国家或地区卫生管理部门注册的全科医生（GP）及物理治疗师' },
    eligNote: {
      en: TBC_EN('criteria, verification of registration, scope of practice'),
      zh: TBC_ZH('具体条件、注册核验方式、执业范围')
    },
    benTitle: { en: 'Proposed member benefits', zh: '拟定会员权益' },
    ben1: { en: 'Discounted fees for HNCMA training (proposed 20%)', zh: '学会培训费用优惠（拟八折）' },
    ben2: { en: 'Invitations to academic exchange activities', zh: '受邀参加学术交流活动' },
    ben3: { en: 'Certificates of completion for HNCMA courses', zh: '学会课程结业证书' },
    ben4: { en: 'Professional discussion of complex cases with experienced practitioners', zh: '与资深从业者开展疑难病例专业讨论' },
    benNote: {
      en: 'All benefits are proposals. ' + TBC_EN('format of case discussion and privacy safeguards'),
      zh: '以上权益均为拟定。' + TBC_ZH('病例讨论形式及隐私保护安排')
    },
    feesTitle: { en: 'Fees and applications', zh: '会费与申请' },
    feesBody: {
      en: 'Membership fees: ' + TBC_EN() + ' Online applications are not yet open.',
      zh: '会费：' + TBC_ZH() + ' 网上申请尚未开放。'
    },
    applyBtn: { en: 'Apply for membership (draft)', zh: '申请入会（草稿）' },

    contactTitle: { en: 'Contact us', zh: '联系我们' },
    contactLede: {
      en: 'Contact details will be published once confirmed by the association.',
      zh: '联系方式经学会确认后公布。'
    },
    cEmailK: { en: 'Email', zh: '电子邮箱' },
    cPhoneK: { en: 'Phone', zh: '电话' },
    cAddrK: { en: 'Address', zh: '地址' },
    cAddrV: { en: 'Melbourne, Victoria ' + TBC_EN('postal address'), zh: '维多利亚州墨尔本 ' + TBC_ZH('通讯地址') },
    cWebK: { en: 'Website', zh: '网址' },
    cWebV: { en: TBC_EN('domain'), zh: TBC_ZH('域名') },
    tbcOnly: { en: TBC_EN(), zh: TBC_ZH() },
    formFlag: {
      en: 'Draft form — messages are not sent or saved.',
      zh: '草稿表单——信息不会发送，也不会保存。'
    },
    fName: { en: 'Name', zh: '姓名' },
    fEmail: { en: 'Email', zh: '电子邮箱' },
    fRole: { en: 'I am a', zh: '身份' },
    r1: { en: 'Registered health practitioner', zh: '注册卫生专业人员' },
    r2: { en: 'Student', zh: '学生' },
    r3: { en: 'Member of the public', zh: '公众' },
    r4: { en: 'Other', zh: '其他' },
    fMsg: { en: 'Message', zh: '留言' },
    fSubmit: { en: 'Check form (not sent)', zh: '检查表单（不会发送）' },
    formMissing: { en: 'Please complete name, a valid email and message.', zh: '请填写姓名、有效邮箱和留言。' },
    formDone: {
      en: 'Draft only: your message has NOT been sent or saved. A contact method will be connected once the association confirms its details.',
      zh: '仅为草稿：您的留言并未发送，也未保存。学会确认联系方式后再接通。'
    },

    footAbout: {
      en: 'Fire needle professional association, Melbourne. Full name and registration ' + TBC_EN(),
      zh: '火针专业学会，墨尔本。全称及注册信息' + TBC_ZH()
    },
    footDisclaimer: {
      en: 'Information on this website is general in nature and is not a substitute for advice from a registered health practitioner.',
      zh: '本网站信息仅供一般参考，不能替代注册卫生专业人员的意见。'
    },
    footPrivacy: { en: 'Privacy policy: ' + TBC_EN(), zh: '隐私政策：' + TBC_ZH() },
    footCopy: { en: '© 2026 HNCMA · Draft for internal review — not published', zh: '© 2026 HNCMA · 内部审阅草稿，尚未发布' },

    modalTitle: { en: 'Draft feature', zh: '草稿功能' },
    modalBody: {
      en: 'Online registration is not available yet. This button is a placeholder: no details have been collected, and no registration or payment has been made.',
      zh: '网上登记尚未开通。此按钮仅为占位：未收集任何信息，也未完成任何登记或付款。'
    },
    modalClose: { en: 'Close', zh: '关闭' }
  };

  const titles = {
    home: { en: 'HNCMA — Fire needle professional association (draft)', zh: 'HNCMA 火针专业学会（草稿）' }
  };

  let mode = 'en';
  try { mode = localStorage.getItem('hncma-lang') || 'en'; } catch (e) { /* ignore */ }
  if (!['en', 'zh', 'both'].includes(mode)) mode = 'en';

  function render(el) {
    const entry = T[el.dataset.i18n];
    if (!entry) return;
    if (el.tagName === 'OPTION') {
      el.textContent = mode === 'both' ? `${entry.en} / ${entry.zh}` : entry[mode];
      return;
    }
    el.innerHTML = mode === 'both'
      ? `<span class="l-en">${entry.en}</span><span class="l-zh">${entry.zh}</span>`
      : entry[mode];
  }

  function applyLang() {
    document.body.classList.remove('mode-en', 'mode-zh', 'mode-both');
    document.body.classList.add('mode-' + mode);
    document.documentElement.lang = mode === 'zh' ? 'zh-Hans' : 'en';
    document.querySelectorAll('[data-i18n]').forEach(render);
    document.querySelectorAll('[data-lang]').forEach((b) =>
      b.setAttribute('aria-pressed', String(b.dataset.lang === mode)));
    document.title = mode === 'zh' ? titles.home.zh : titles.home.en;
    document.querySelector('.menu-toggle').setAttribute('aria-label', mode === 'zh' ? T.menu.zh : T.menu.en);
    const status = document.querySelector('.form-status');
    if (status) status.textContent = '';
  }

  document.querySelectorAll('[data-lang]').forEach((b) =>
    b.addEventListener('click', () => {
      mode = b.dataset.lang;
      try { localStorage.setItem('hncma-lang', mode); } catch (e) { /* ignore */ }
      applyLang();
    }));

  // Routing
  const pages = [...document.querySelectorAll('.page')];
  const navLinks = [...document.querySelectorAll('[data-nav]')];
  const nav = document.getElementById('site-nav');
  const toggle = document.querySelector('.menu-toggle');

  function route() {
    const name = (location.hash.replace(/^#\/?/, '') || 'home');
    const target = pages.find((p) => p.dataset.page === name) ? name : 'home';
    pages.forEach((p) => { p.hidden = p.dataset.page !== target; });
    navLinks.forEach((a) => a.classList.toggle('active', a.dataset.nav === target));
    nav.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
    window.scrollTo(0, 0);
    observeReveals();
  }
  window.addEventListener('hashchange', route);

  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
  });

  // Reveal on scroll
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  let io = null;
  if (!reduce && 'IntersectionObserver' in window) {
    io = new IntersectionObserver((entries) => entries.forEach((en) => {
      if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); }
    }), { threshold: 0.12 });
  }
  function observeReveals() {
    document.querySelectorAll('.page:not([hidden]) .reveal:not(.in)').forEach((el) => {
      if (io) io.observe(el); else el.classList.add('in');
    });
  }

  // Draft-only buttons
  const modal = document.getElementById('draft-modal');
  document.querySelectorAll('[data-draft]').forEach((b) =>
    b.addEventListener('click', () => {
      if (typeof modal.showModal === 'function') modal.showModal();
      else alert(T.modalBody[mode === 'zh' ? 'zh' : 'en']);
    }));

  // Contact form: validate locally, never send
  const form = document.getElementById('contact-form');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const status = form.querySelector('.form-status');
    const f = form.elements;
    const ok = f['name'].value.trim() && /.+@.+\..+/.test(f['email'].value) && f['message'].value.trim();
    const key = ok ? 'formDone' : 'formMissing';
    status.className = 'form-status ' + (ok ? 'is-ok' : 'is-err');
    status.textContent = mode === 'zh' ? T[key].zh : mode === 'both' ? `${T[key].en} / ${T[key].zh}` : T[key].en;
  });

  applyLang();
  route();
})();
