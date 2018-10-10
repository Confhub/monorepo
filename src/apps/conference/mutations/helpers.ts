import tslug from 'tslug';
import {
  Image,
  ImageCreateOneInput,
  Location,
  LocationCreateOneInput,
  Price,
  PriceCreateInput,
  Social,
  SocialCreateOneInput,
  Tag,
  TagCreateManyInput,
  TagUpdateManyInput,
} from '../../../generated/prisma';

export const generateTagsCreate = (
  tags: Tag[],
  prevTags?: Tag[],
): TagCreateManyInput => {
  const connect = [];
  const create = [];

  tags.map(tag => {
    if (tag.id) {
      return connect.push({
        id: tag.id,
      });
    }

    return create.push({
      name: tag.name,
      slug: tslug(tag.name, { decamelize: false }),
    });
  });

  return {
    connect,
    create,
  };
};

export const generateTagsUpdate = (
  tags: Tag[],
  prevTags?: Tag[],
): TagUpdateManyInput => {
  const disconnect = prevTags
    ? prevTags
        .filter(prevTag => tags.findIndex(tag => tag.id === prevTag.id) === -1)
        .map(tag => ({ id: tag.id }))
    : [];

  return {
    ...generateTagsCreate(tags),
    disconnect,
  };
};

export const generateImage = (
  { src, alt }: Image,
  name: string,
): ImageCreateOneInput => ({
  create: {
    src: src || 'http://via.placeholder.com/350x150',
    alt: alt || tslug(name),
  },
});

export const generateLocation = ({
  venueName,
  country,
  city,
  address,
  coordinates,
}: Location): LocationCreateOneInput => ({
  create: {
    venueName: venueName || '',
    continent: detectContinent(country.toLowerCase()),
    country,
    city,
    address,
    coordinates: {
      create: {
        latitude: coordinates.latitude,
        longitude: coordinates.longitude,
      },
    },
  },
});

export const generateSocial = ({
  facebook,
  twitter,
  instagram,
}: Social): SocialCreateOneInput => {
  return {
    create: {
      facebook,
      twitter,
      instagram,
    },
  };
};

export const generatePrice = (price: Price): PriceCreateInput => {
  if (!price) {
    return null;
  }

  return {
    amount: price.amount,
    expirationDate: price.expirationDate,
    currency: price.currency,
  };
};

export const detectContinent = (code: string): string => {
  const countryCodes = {
    af: 'Asia', // "Islamic Republic of Afghanistan")
    ax: 'Europe', // "Åland Islands")
    al: 'Europe', // "Republic of Albania")
    dz: 'Africa', // "People's Democratic Republic of Algeria")
    as: 'Oceania', // "American Samoa")
    ad: 'Europe', // "Principality of Andorra")
    ao: 'Africa', // "Republic of Angola")
    ai: 'North America', // "Anguilla")
    aq: 'Antarctica', // "Antarctica (the territory South of 60 deg S)")
    ag: 'North America', // "Antigua and Barbuda")
    ar: 'South America', // "Argentine Republic")
    am: 'Asia', // "Republic of Armenia")
    aw: 'North America', // "Aruba")
    au: 'Oceania', // "Commonwealth of Australia")
    at: 'Europe', // "Republic of Austria")
    az: 'Asia', // "Republic of Azerbaijan")
    bs: 'North America', // "Commonwealth of the Bahamas")
    bh: 'Asia', // "Kingdom of Bahrain")
    bd: 'Asia', // "People's Republic of Bangladesh")
    bb: 'North America', // "Barbados")
    by: 'Europe', // "Republic of Belarus")
    be: 'Europe', // "Kingdom of Belgium")
    bz: 'North America', // "Belize")
    bj: 'Africa', // "Republic of Benin")
    bm: 'North America', // "Bermuda")
    bt: 'Asia', // "Kingdom of Bhutan")
    bo: 'South America', // "Plurinational State of Bolivia")
    bq: 'North America', // '535'
    ba: 'Europe', // "Bosnia and Herzegovina")
    bw: 'Africa', // "Republic of Botswana")
    bv: 'Antarctica', // "Bouvet Island (Bouvetoya)")
    br: 'South America', // "Federative Republic of Brazil")
    io: 'Asia', // "British Indian Ocean Territory (Chagos Archipelago)")
    vg: 'North America', // "British Virgin Islands")
    bn: 'Asia', // "Brunei Darussalam")
    bg: 'Europe', // "Republic of Bulgaria")
    bf: 'Africa', // "Burkina Faso")
    bi: 'Africa', // "Republic of Burundi")
    kh: 'Asia', // "Kingdom of Cambodia")
    cm: 'Africa', // "Republic of Cameroon")
    ca: 'North America', // "Canada")
    cv: 'Africa', // "Republic of Cape Verde")
    ky: 'North America', // "Cayman Islands")
    cf: 'Africa', // "Central African Republic")
    td: 'Africa', // "Republic of Chad")
    cl: 'South America', // "Republic of Chile")
    cn: 'Asia', // "People's Republic of China")
    cx: 'Asia', // "Christmas Island")
    cc: 'Asia', // "Cocos (Keeling) Islands")
    co: 'South America', // "Republic of Colombia")
    km: 'Africa', // "Union of the Comoros")
    cd: 'Africa', // "Democratic Republic of the Congo")
    cg: 'Africa', // "Republic of the Congo")
    ck: 'Oceania', // "Cook Islands")
    cr: 'North America', // "Republic of Costa Rica")
    ci: 'Africa', // "Republic of Cote d'Ivoire")
    hr: 'Europe', // "Republic of Croatia")
    cu: 'North America', // "Republic of Cuba")
    cw: 'North America', // "Curaçao")
    cy: 'Asia', // "Republic of Cyprus")
    cz: 'Europe', // "Czech Republic")
    dk: 'Europe', // "Kingdom of Denmark")
    dj: 'Africa', // "Republic of Djibouti")
    dm: 'North America', // "Commonwealth of Dominica")
    do: 'North America', // "Dominican Republic")
    ec: 'South America', // "Republic of Ecuador")
    eg: 'Africa', // "Arab Republic of Egypt")
    sv: 'North America', // "Republic of El Salvador")
    gq: 'Africa', // "Republic of Equatorial Guinea")
    er: 'Africa', // "State of Eritrea")
    ee: 'Europe', // "Republic of Estonia")
    et: 'Africa', // "Federal Democratic Republic of Ethiopia")
    fo: 'Europe', // "Faroe Islands")
    fk: 'South America', // "Falkland Islands (Malvinas)")
    fj: 'Oceania', // "Republic of Fiji")
    fi: 'Europe', // "Republic of Finland")
    fr: 'Europe', // "French Republic")
    gf: 'South America', // "French Guiana")
    pf: 'Oceania', // "French Polynesia")
    tf: 'Antarctica', // "French Southern Territories")
    ga: 'Africa', // "Gabonese Republic")
    gm: 'Africa', // "Republic of the Gambia")
    ge: 'Asia', // "Georgia")
    de: 'Europe', // "Federal Republic of Germany")
    gh: 'Africa', // "Republic of Ghana")
    gi: 'Europe', // "Gibraltar")
    gr: 'Europe', // "Hellenic Republic Greece")
    gl: 'North America', // "Greenland")
    gd: 'North America', // "Grenada")
    gp: 'North America', // "Guadeloupe")
    gu: 'Oceania', // "Guam")
    gt: 'North America', // "Republic of Guatemala")
    gg: 'Europe', // "Bailiwick of Guernsey")
    gn: 'Africa', // "Republic of Guinea")
    gw: 'Africa', // "Republic of Guinea-Bissau")
    gy: 'South America', // "Co-operative Republic of Guyana")
    ht: 'North America', // "Republic of Haiti")
    hm: 'Antarctica', // "Heard Island and McDonald Islands")
    va: 'Europe', // "Holy See (Vatican City State)")
    hn: 'North America', // "Republic of Honduras")
    hk: 'Asia', // "Hong Kong Special Administrative Region of China")
    hu: 'Europe', // "Hungary")
    is: 'Europe', // "Republic of Iceland")
    in: 'Asia', // "Republic of India")
    id: 'Asia', // "Republic of Indonesia")
    ir: 'Asia', // "Islamic Republic of Iran")
    iq: 'Asia', // "Republic of Iraq")
    ie: 'Europe', // "Ireland")
    im: 'Europe', // "Isle of Man")
    il: 'Asia', // "State of Israel")
    it: 'Europe', // "Italian Republic")
    jm: 'North America', // "Jamaica")
    jp: 'Asia', // "Japan")
    je: 'Europe', // "Bailiwick of Jersey")
    jo: 'Asia', // "Hashemite Kingdom of Jordan")
    kz: 'Asia', // "Republic of Kazakhstan")
    ke: 'Africa', // "Republic of Kenya")
    ki: 'Oceania', // "Republic of Kiribati")
    kp: 'Asia', // "Democratic People's Republic of Korea")
    kr: 'Asia', // "Republic of Korea")
    kw: 'Asia', // "State of Kuwait")
    kg: 'Asia', // "Kyrgyz Republic")
    la: 'Asia', // "Lao People's Democratic Republic")
    lv: 'Europe', // "Republic of Latvia")
    lb: 'Asia', // "Lebanese Republic")
    ls: 'Africa', // "Kingdom of Lesotho")
    lr: 'Africa', // "Republic of Liberia")
    ly: 'Africa', // "Libya")
    li: 'Europe', // "Principality of Liechtenstein")
    lt: 'Europe', // "Republic of Lithuania")
    lu: 'Europe', // "Grand Duchy of Luxembourg")
    mo: 'Asia', // "Macao Special Administrative Region of China")
    mk: 'Europe', // "Republic of Macedonia")
    mg: 'Africa', // "Republic of Madagascar")
    mw: 'Africa', // "Republic of Malawi")
    my: 'Asia', // "Malaysia")
    mv: 'Asia', // "Republic of Maldives")
    ml: 'Africa', // "Republic of Mali")
    mt: 'Europe', // "Republic of Malta")
    mh: 'Oceania', // "Republic of the Marshall Islands")
    mq: 'North America', // "Martinique")
    mr: 'Africa', // "Islamic Republic of Mauritania")
    mu: 'Africa', // "Republic of Mauritius")
    yt: 'Africa', // "Mayotte")
    mx: 'North America', // "United Mexican States")
    fm: 'Oceania', // "Federated States of Micronesia")
    md: 'Europe', // "Republic of Moldova")
    mc: 'Europe', // "Principality of Monaco")
    mn: 'Asia', // "Mongolia")
    me: 'Europe', // "Montenegro")
    ms: 'North America', // "Montserrat")
    ma: 'Africa', // "Kingdom of Morocco")
    mz: 'Africa', // "Republic of Mozambique")
    mm: 'Asia', // "Republic of the Union of Myanmar")
    na: 'Africa', // "Republic of Namibia")
    nr: 'Oceania', // "Republic of Nauru")
    np: 'Asia', // "Federal Democratic Republic of Nepal")
    nl: 'Europe', // "Kingdom of the Netherlands")
    nc: 'Oceania', // "New Caledonia")
    nz: 'Oceania', // "New Zealand")
    ni: 'North America', // "Republic of Nicaragua")
    ne: 'Africa', // "Republic of Niger")
    ng: 'Africa', // "Federal Republic of Nigeria")
    nu: 'Oceania', // "Niue")
    nf: 'Oceania', // "Norfolk Island")
    mp: 'Oceania', // "Commonwealth of the Northern Mariana Islands")
    no: 'Europe', // "Kingdom of Norway")
    om: 'Asia', // "Sultanate of Oman")
    pk: 'Asia', // "Islamic Republic of Pakistan")
    pw: 'Oceania', // "Republic of Palau")
    ps: 'Asia', // "Occupied Palestinian Territory")
    pa: 'North America', // "Republic of Panama")
    pg: 'Oceania', // "Independent State of Papua New Guinea")
    py: 'South America', // "Republic of Paraguay")
    pe: 'South America', // "Republic of Peru")
    ph: 'Asia', // "Republic of the Philippines")
    pn: 'Oceania', // "Pitcairn Islands")
    pl: 'Europe', // "Republic of Poland")
    pt: 'Europe', // "Portuguese Republic")
    pr: 'North America', // "Commonwealth of Puerto Rico")
    qa: 'Asia', // "State of Qatar")
    re: 'Africa', // "Réunion")
    ro: 'Europe', // "Romania")
    ru: 'Europe', // "Russian Federation")
    rw: 'Africa', // "Republic of Rwanda")
    bl: 'North America', // "Saint Barthélemy")
    sh: 'Africa', // '654'
    kn: 'North America', // "Federation of Saint Kitts and Nevis")
    lc: 'North America', // "Saint Lucia")
    mf: 'North America', // "Saint Martin (French part)")
    pm: 'North America', // "Saint Pierre and Miquelon")
    vc: 'North America', // "Saint Vincent and the Grenadines")
    ws: 'Oceania', // "Independent State of Samoa")
    sm: 'Europe', // "Republic of San Marino")
    st: 'Africa', // "Democratic Republic of Sao Tome and Principe")
    sa: 'Asia', // "Kingdom of Saudi Arabia")
    sn: 'Africa', // "Republic of Senegal")
    rs: 'Europe', // "Republic of Serbia")
    sc: 'Africa', // "Republic of Seychelles")
    sl: 'Africa', // "Republic of Sierra Leone")
    sg: 'Asia', // "Republic of Singapore")
    sx: 'North America', // "Sint Maarten (Dutch part)")
    sk: 'Europe', // "Slovakia (Slovak Republic)")
    si: 'Europe', // "Republic of Slovenia")
    sb: 'Oceania', // "Solomon Islands")
    so: 'Africa', // "Somali Republic")
    za: 'Africa', // "Republic of South Africa")
    gs: 'Antarctica', // "South Georgia and the South Sandwich Islands")
    ss: 'Africa', // "Republic of South Sudan")
    es: 'Europe', // "Kingdom of Spain")
    lk: 'Asia', // "Democratic Socialist Republic of Sri Lanka")
    sd: 'Africa', // "Republic of Sudan")
    sr: 'South America', // "Republic of Suriname")
    sj: 'Europe', // "Svalbard & Jan Mayen Islands")
    sz: 'Africa', // "Kingdom of Swaziland")
    se: 'Europe', // "Kingdom of Sweden")
    ch: 'Europe', // "Swiss Confederation")
    sy: 'Asia', // "Syrian Arab Republic")
    tw: 'Asia', // "Taiwan
    tj: 'Asia', // "Republic of Tajikistan")
    tz: 'Africa', // "United Republic of Tanzania")
    th: 'Asia', // "Kingdom of Thailand")
    tl: 'Asia', // "Democratic Republic of Timor-Leste")
    tg: 'Africa', // "Togolese Republic")
    tk: 'Oceania', // "Tokelau")
    to: 'Oceania', // "Kingdom of Tonga")
    tt: 'North America', // "Republic of Trinidad and Tobago")
    tn: 'Africa', // "Tunisian Republic")
    tr: 'Asia', // "Republic of Turkey")
    tm: 'Asia', // "Turkmenistan")
    tc: 'North America', // "Turks and Caicos Islands")
    tv: 'Oceania', // "Tuvalu")
    ug: 'Africa', // "Republic of Uganda")
    ua: 'Europe', // "Ukraine")
    ae: 'Asia', // "United Arab Emirates")
    gb: 'Europe', // "United Kingdom of Great Britain & Northern Ireland")
    us: 'North America', // "United States of America")
    um: 'Oceania', // "United States Minor Outlying Islands")
    vi: 'North America', // "United States Virgin Islands")
    uy: 'South America', // "Eastern Republic of Uruguay")
    uz: 'Asia', // "Republic of Uzbekistan")
    vu: 'Oceania', // "Republic of Vanuatu")
    ve: 'South America', // "Bolivarian Republic of Venezuela")
    vn: 'Asia', // "Socialist Republic of Vietnam")
    wf: 'Oceania', // "Wallis and Futuna")
    eh: 'Africa', // "Western Sahara")
    ye: 'Asia', // "Yemen")
    zm: 'Africa', // "Republic of Zambia")
    zw: 'Africa', // "Republic of Zimbabwe");
  };

  let continent = '';

  Object.keys(countryCodes).map((countryCode, id) => {
    if (countryCode === code) {
      continent = Object.values(countryCodes)[id];
    }
  });

  return continent;
};
