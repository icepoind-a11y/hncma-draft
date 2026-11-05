/* HNCMA draft site — language switching, routing, draft-only actions.
   No data is sent or stored anywhere (except the chosen language in localStorage). */
(function () {
  'use strict';

  const TBC_EN = (t) => `<span class="tbc">TBC${t ? ' · ' + t : ''}</span>`;
  const TBC_ZH = (t) => `<span class="tbc">待确认${t ? ' · ' + t : ''}</span>`;

  const T = {
    draftBar: {
      en: 'Draft for review (version 2) — not a published website. Items marked <span class="tbc">TBC</span> are awaiting confirmation.',
      zh: '审阅草稿（第二版）——网站尚未发布。标有 <span class="tbc">待确认</span> 的内容需进一步确认。'
    },
    brandSub: { en: 'Hot Needle Chinese Medicine Association', zh: '火针协会 · 墨尔本' },
    menu: { en: 'Menu', zh: '菜单' },
    joinCta: { en: 'Contact us', zh: '联系我们' },
    navHome: { en: 'Home', zh: '首页' },
    navAbout: { en: 'About', zh: '关于学会' },
    navFire: { en: 'Hot needle therapy', zh: '火针介绍' },
    navTraining: { en: 'Training', zh: '火针培训' },
    navMembership: { en: 'Membership', zh: '会员' },
    navContact: { en: 'Contact', zh: '联系我们' },
    tileFire: { en: 'What is hot needle therapy?', zh: '什么是火针疗法' },

    heroEyebrow: { en: 'Melbourne, Australia', zh: '澳大利亚 · 墨尔本' },
    heroTitle: { en: 'Teaching and sharing hot needle therapy', zh: '传授与交流火针技术' },
    heroLede: {
      en: 'The Hot Needle Chinese Medicine Association (HNCMA) is a small incorporated association in Melbourne. We introduce hot needle therapy to practitioners and train them in the technique, with an emphasis on safe, ethical practice.',
      zh: '火针协会（Hot Needle Chinese Medicine Association，HNCMA）是在墨尔本注册的小型协会，向从业者介绍火针疗法并传授火针技术，重视安全、规范的执业。'
    },
    heroCta1: { en: 'About the association', zh: '了解学会' },
    heroCta2: { en: 'What is hot needle therapy?', zh: '认识火针' },

    introTitle: { en: 'A small association with one focus', zh: '规模不大，专注火针' },
    introBody: {
      en: 'Hot needle therapy, also called fire needle therapy (<i>huǒ zhēn</i>), is a traditional acupuncture technique in which a specially made needle is heated before it is applied. HNCMA brings together a small group of practitioners to learn the technique, share experience and uphold professional standards.',
      zh: '火针是一种传统针刺技法：将特制针具烧热后施针。HNCMA 把一小群从业者联系在一起，学习火针技术、交流经验，并共同维护专业标准。'
    },
    introNote: {
      en: 'Incorporated association, Victoria · Reg. No. A0128303C, incorporated 6 January 2026.',
      zh: '维多利亚州注册社团法人 · 注册号 A0128303C，2026 年 1 月 6 日成立。'
    },
    exploreTitle: { en: 'Explore HNCMA', zh: '走进学会' },
    pillarsEyebrow: { en: 'What we do', zh: '我们做什么' },
    p1t: { en: 'Training', zh: '技术培训' },
    p1b: { en: 'Hands-on training in hot needle technique for registered health professionals.', zh: '为注册卫生专业人员提供火针技术实操培训。' },
    p2t: { en: 'Exchange', zh: '学术交流' },
    p2b: { en: 'Talks and discussion on Chinese medicine and hot needle therapy.', zh: '围绕中医与火针开展讲座和讨论。' },
    p3t: { en: 'Professional community', zh: '专业社群' },
    p3b: { en: 'A network where practitioners can share experience and discuss practice with peers.', zh: '让从业者分享经验、与同行切磋的专业网络。' },
    joinTitle: { en: 'Interested in joining?', zh: '有意加入？' },
    joinBody: {
      en: 'Membership is for registered Chinese medicine practitioners, acupuncturists and other registered health professionals who want to learn and practise hot needle therapy.',
      zh: '会员面向希望学习和运用火针的注册中医师、针灸师及其他注册卫生专业人员。'
    },
    joinCta2: { en: 'View membership', zh: '查看会员信息' },

    aboutTitle: { en: 'About HNCMA', zh: '关于 HNCMA' },
    aboutLede: {
      en: 'HNCMA is an incorporated association in Victoria focused on hot needle (fire needle) therapy in traditional Chinese medicine. Its purpose is to introduce and share hot needle technique and to train Chinese medicine practitioners, acupuncturists and other registered health professionals. It is deliberately small: a working group of practitioners rather than a large membership body.',
      zh: 'HNCMA 是在维多利亚州注册、以中医火针为核心的协会，宗旨是介绍与交流火针技术，并为中医师、针灸师及其他注册卫生专业人员提供培训。协会规模不大，是一群从业者的交流与学习团体，而不是大型会员组织。'
    },
    factsTitle: { en: 'At a glance', zh: '基本信息' },
    fBasedK: { en: 'Based in', zh: '所在地' },
    fBasedV: { en: 'Melbourne, Victoria, Australia', zh: '澳大利亚维多利亚州墨尔本' },
    fNameK: { en: 'Full name', zh: '正式名称' },
    fNameV: { en: 'Hot Needle Chinese Medicine Association Inc.', zh: 'Hot Needle Chinese Medicine Association Inc. ' + TBC_ZH('中文正式名称') },
    fStatusK: { en: 'Legal status', zh: '法律性质' },
    fStatusV: { en: 'Incorporated association under the <i>Associations Incorporation Reform Act 2012</i> (Vic). Registration No. A0128303C, incorporated 6 January 2026.', zh: '依据维多利亚州《2012 年社团法人改革法》注册的社团法人，注册号 A0128303C，2026 年 1 月 6 日成立。' },
    fPeopleK: { en: 'Leadership', zh: '负责人 / 理事会' },
    fPeopleV: { en: 'President · Vice-President · Secretary and Treasurer ' + TBC_EN('names and registrations'), zh: '会长 · 副会长 · 秘书兼财务 ' + TBC_ZH('姓名及注册资格') },
    fWhoK: { en: 'For', zh: '面向' },
    fWhoV: {
      en: 'Chinese medicine practitioners, acupuncturists and other registered health professionals',
      zh: '中医师、针灸师及其他注册卫生专业人员'
    },
    fAbnK: { en: 'ABN', zh: 'ABN' },
    fAbnV: { en: TBC_EN('if registered'), zh: TBC_ZH('如已申请') },
    futureTitle: { en: 'Looking ahead', zh: '未来设想' },
    futureBody: {
      en: 'HNCMA is registered in Victoria. As the association grows, the founders hope to build a national body, publish a book on the clinical use of hot needle therapy and expand training. These are plans rather than current services, and will be announced here only once confirmed.',
      zh: 'HNCMA 目前在维多利亚州注册。随着协会逐步完善，发起人希望日后成立全国性的协会、出版火针临床应用专著并扩大培训。以上均为计划，并非现有服务，确定后才会在此公布。'
    },

    fireTitle: { en: 'What is hot needle therapy?', zh: '什么是火针疗法？' },
    fireLede: {
      en: 'Hot needle therapy, also known as fire needle therapy, uses specially made needles of varying thickness. The needle tip is heated over a flame until red-hot, then quickly inserted at acupuncture points, <i>Ashi</i> (tender) points or affected areas of the body.',
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
      en: 'Training in hot needle technique is the main activity of HNCMA. Dates, venues and fees are sent directly to registered practitioners who register their interest.',
      zh: '火针技术培训是协会的主要工作。培训时间、地点与费用另行通知登记意向的注册从业者，不在网站公布。'
    },
    planned: { en: 'Planned', zh: '筹划中' },
    c1t: { en: 'Professional training', zh: '专业培训' },
    c1b: {
      en: 'Hot needle technique training for Chinese medicine practitioners, acupuncturists and other eligible registered health professionals. ' + TBC_EN('curriculum, trainers, format'),
      zh: '面向中医师、针灸师及其他符合条件的注册卫生专业人员的火针技术培训。' + TBC_ZH('课程、讲师、形式')
    },
    c2t: { en: 'Academic exchange', zh: '学术交流' },
    c2b: {
      en: 'Talks and case-based discussion on Chinese medicine and hot needle therapy among practitioners.',
      zh: '从业者之间围绕中医与火针开展讲座与讨论。'
    },
    c3t: { en: 'Certificates and CPD', zh: '证明与 CPD' },
    c3b: {
      en: 'Participants receive a certificate of attendance stating the hours attended. HNCMA is not an accredited CPD provider. Registered practitioners may choose to record the activity in their own CPD, in line with their National Board\'s requirements.',
      zh: '参加者将获得注明学时的参加证明。本协会不是认证的 CPD 机构；注册从业者可按所属国家委员会（如澳大利亚中医委员会）的要求，自行记录、申报个人 CPD。'
    },
    eventsTitle: { en: 'Next course', zh: '近期课程' },
    noEvents: { en: 'Course details are announced to people who have registered their interest.', zh: '课程信息将另行通知已登记意向的人士。' },
    interestBtn: { en: 'Register interest (draft)', zh: '登记意向（草稿）' },

    memTitle: { en: 'Membership', zh: '会员' },
    memLede: {
      en: 'HNCMA is a small association of practitioners who want to learn and practise hot needle therapy together. Membership is mainly about training and exchange with peers.',
      zh: 'HNCMA 是一群希望共同学习和运用火针的从业者组成的小型协会。入会主要是为了参加培训、与同行交流。'
    },
    eligTitle: { en: 'Who may be eligible', zh: '拟定入会资格' },
    elig1: { en: 'TCM practitioners and acupuncturists registered in their country or region', zh: '在所在国家或地区注册的中医师、针灸师' },
    elig2: { en: 'General practitioners (GPs) and physiotherapists registered with a national or regional health authority', zh: '在国家或地区卫生管理部门注册的全科医生（GP）及物理治疗师' },
    eligNote: {
      en: TBC_EN('criteria, verification of registration, scope of practice'),
      zh: TBC_ZH('具体条件、注册核验方式、执业范围')
    },
    benTitle: { en: 'What members take part in', zh: '会员参与什么' },
    ben1: { en: 'Priority notice of HNCMA training', zh: '优先获得协会培训通知' },
    ben2: { en: 'Invitations to academic exchange activities', zh: '受邀参加学术交流活动' },
    ben3: { en: 'Certificates of attendance for HNCMA activities', zh: '协会活动参加证明' },
    ben4: { en: 'Professional discussion of complex cases with experienced practitioners', zh: '与资深从业者开展疑难病例专业讨论' },
    benNote: {
      en: 'Case discussions are held without identifying patient details. ' + TBC_EN('format'),
      zh: '病例讨论不涉及可识别患者身份的信息。' + TBC_ZH('具体形式')
    },
    feesTitle: { en: 'How to join', zh: '如何入会' },
    feesBody: {
      en: 'Contact the association to ask about joining. Details are provided directly.',
      zh: '有意入会请联系协会，具体安排另行告知。'
    },
    applyBtn: { en: 'Contact us about joining', zh: '联系我们咨询入会' },

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
      en: 'Hot Needle Chinese Medicine Association Inc. Incorporated association, Victoria · Reg. No. A0128303C.',
      zh: 'Hot Needle Chinese Medicine Association Inc.（火针协会）。维多利亚州注册社团法人 · 注册号 A0128303C。'
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
    home: { en: 'HNCMA — Hot Needle Chinese Medicine Association (draft)', zh: 'HNCMA 火针协会（草稿）' }
  };

  let mode = 'en';
  try { mode = localStorage.getItem('hncma-lang') || 'en'; } catch (e) { /* ignore */ }
  if (!['en', 'zh'].includes(mode)) mode = 'en';

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
