import tslug from 'tslug';
import {
  Image,
  ImageCreateOneInput,
  Location,
  LocationCreateOneInput,
  // Price,
  // PriceCreateInput,
  // Social,
  // SocialCreateOneInput,
  REGION,
  Tag,
  TagCreateManyInput,
  TagUpdateManyInput,
} from '../../../generated/prisma';
import { LocationInput } from '../inputs/Location';

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
  countryCode,
  country,
  city,
  address,
  coordinates,
}: LocationInput): LocationCreateOneInput => {
  console.log('country cide', countryCode, detectContinent(countryCode));

  return {
    create: {
      venueName: venueName || '',
      region: detectContinent(countryCode),
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
  };
};

// export const generateSocial = ({
//   facebook,
//   twitter,
//   instagram,
// }: Social): SocialCreateOneInput => {
//   return {
//     create: {
//       facebook,
//       twitter,
//       instagram,
//     },
//   };
// };

export const detectContinent = (code: string): REGION => {
  const countryCodes = {
    af: 'Asia', // "Islamic Republic of Afghanistan")
    ax: 'EUROPE', // "Åland Islands")
    al: 'EUROPE', // "Republic of Albania")
    dz: 'AFRICA', // "People's Democratic Republic of Algeria")
    as: 'OCEANIA', // "American Samoa")
    ad: 'EUROPE', // "Principality of Andorra")
    ao: 'AFRICA', // "Republic of Angola")
    ai: 'NORTH_AMERICA', // "Anguilla")
    ag: 'NORTH_AMERICA', // "Antigua and Barbuda")
    ar: 'LATIN_AMERICA', // "Argentine Republic")
    am: 'ASIA', // "Republic of Armenia")
    aw: 'NORTH_AMERICA', // "Aruba")
    au: 'OCEANIA', // "Commonwealth of Australia")
    at: 'EUROPE', // "Republic of Austria")
    az: 'ASIA', // "Republic of Azerbaijan")
    bs: 'NORTH_AMERICA', // "Commonwealth of the Bahamas")
    bh: 'ASIA', // "Kingdom of Bahrain")
    bd: 'ASIA', // "People's Republic of Bangladesh")
    bb: 'NORTH_AMERICA', // "Barbados")
    by: 'EUROPE', // "Republic of Belarus")
    be: 'EUROPE', // "Kingdom of Belgium")
    bz: 'NORTH_AMERICA', // "Belize")
    bj: 'AFRICA', // "Republic of Benin")
    bm: 'NORTH_AMERICA', // "Bermuda")
    bt: 'ASIA', // "Kingdom of Bhutan")
    bo: 'LATIN_AMERICA', // "Plurinational State of Bolivia")
    bq: 'NORTH_AMERICA', // '535'
    ba: 'EUROPE', // "Bosnia and Herzegovina")
    bw: 'AFRICA', // "Republic of Botswana")
    br: 'LATIN_AMERICA', // "Federative Republic of Brazil")
    io: 'ASIA', // "British Indian Ocean Territory (Chagos Archipelago)")
    vg: 'NORTH_AMERICA', // "British Virgin Islands")
    bn: 'ASIA', // "Brunei Darussalam")
    bg: 'EUROPE', // "Republic of Bulgaria")
    bf: 'AFRICA', // "Burkina Faso")
    bi: 'AFRICA', // "Republic of Burundi")
    kh: 'ASIA', // "Kingdom of Cambodia")
    cm: 'AFRICA', // "Republic of Cameroon")
    ca: 'NORTH_AMERICA', // "Canada")
    cv: 'AFRICA', // "Republic of Cape Verde")
    ky: 'NORTH_AMERICA', // "Cayman Islands")
    cf: 'AFRICA', // "Central AFRICAn Republic")
    td: 'AFRICA', // "Republic of Chad")
    cl: 'LATIN_AMERICA', // "Republic of Chile")
    cn: 'ASIA', // "People's Republic of China")
    cx: 'ASIA', // "Christmas Island")
    cc: 'ASIA', // "Cocos (Keeling) Islands")
    co: 'LATIN_AMERICA', // "Republic of Colombia")
    km: 'AFRICA', // "Union of the Comoros")
    cd: 'AFRICA', // "Democratic Republic of the Congo")
    cg: 'AFRICA', // "Republic of the Congo")
    ck: 'OCEANIA', // "Cook Islands")
    cr: 'NORTH_AMERICA', // "Republic of Costa Rica")
    ci: 'AFRICA', // "Republic of Cote d'Ivoire")
    hr: 'EUROPE', // "Republic of Croatia")
    cu: 'NORTH_AMERICA', // "Republic of Cuba")
    cw: 'NORTH_AMERICA', // "Curaçao")
    cy: 'ASIA', // "Republic of Cyprus")
    cz: 'EUROPE', // "Czech Republic")
    dk: 'EUROPE', // "Kingdom of Denmark")
    dj: 'AFRICA', // "Republic of Djibouti")
    dm: 'NORTH_AMERICA', // "Commonwealth of Dominica")
    do: 'NORTH_AMERICA', // "Dominican Republic")
    ec: 'LATIN_AMERICA', // "Republic of Ecuador")
    eg: 'AFRICA', // "Arab Republic of Egypt")
    sv: 'NORTH_AMERICA', // "Republic of El Salvador")
    gq: 'AFRICA', // "Republic of Equatorial Guinea")
    er: 'AFRICA', // "State of Eritrea")
    ee: 'EUROPE', // "Republic of Estonia")
    et: 'AFRICA', // "Federal Democratic Republic of Ethiopia")
    fo: 'EUROPE', // "Faroe Islands")
    fk: 'LATIN_AMERICA', // "Falkland Islands (Malvinas)")
    fj: 'OCEANIA', // "Republic of Fiji")
    fi: 'EUROPE', // "Republic of Finland")
    fr: 'EUROPE', // "French Republic")
    gf: 'LATIN_AMERICA', // "French Guiana")
    pf: 'OCEANIA', // "French Polynesia")
    ga: 'AFRICA', // "Gabonese Republic")
    gm: 'AFRICA', // "Republic of the Gambia")
    ge: 'ASIA', // "Georgia")
    de: 'EUROPE', // "Federal Republic of Germany")
    gh: 'AFRICA', // "Republic of Ghana")
    gi: 'EUROPE', // "Gibraltar")
    gr: 'EUROPE', // "Hellenic Republic Greece")
    gl: 'NORTH_AMERICA', // "Greenland")
    gd: 'NORTH_AMERICA', // "Grenada")
    gp: 'NORTH_AMERICA', // "Guadeloupe")
    gu: 'OCEANIA', // "Guam")
    gt: 'NORTH_AMERICA', // "Republic of Guatemala")
    gg: 'EUROPE', // "Bailiwick of Guernsey")
    gn: 'AFRICA', // "Republic of Guinea")
    gw: 'AFRICA', // "Republic of Guinea-Bissau")
    gy: 'LATIN_AMERICA', // "Co-operative Republic of Guyana")
    ht: 'NORTH_AMERICA', // "Republic of Haiti")
    va: 'EUROPE', // "Holy See (Vatican City State)")
    hn: 'NORTH_AMERICA', // "Republic of Honduras")
    hk: 'ASIA', // "Hong Kong Special Administrative Region of China")
    hu: 'EUROPE', // "Hungary")
    is: 'EUROPE', // "Republic of Iceland")
    in: 'ASIA', // "Republic of India")
    id: 'ASIA', // "Republic of Indonesia")
    ir: 'ASIA', // "Islamic Republic of Iran")
    iq: 'ASIA', // "Republic of Iraq")
    ie: 'EUROPE', // "Ireland")
    im: 'EUROPE', // "Isle of Man")
    il: 'ASIA', // "State of Israel")
    it: 'EUROPE', // "Italian Republic")
    jm: 'NORTH_AMERICA', // "Jamaica")
    jp: 'ASIA', // "Japan")
    je: 'EUROPE', // "Bailiwick of Jersey")
    jo: 'ASIA', // "Hashemite Kingdom of Jordan")
    kz: 'ASIA', // "Republic of Kazakhstan")
    ke: 'AFRICA', // "Republic of Kenya")
    ki: 'OCEANIA', // "Republic of Kiribati")
    kp: 'ASIA', // "Democratic People's Republic of Korea")
    kr: 'ASIA', // "Republic of Korea")
    kw: 'ASIA', // "State of Kuwait")
    kg: 'ASIA', // "Kyrgyz Republic")
    la: 'ASIA', // "Lao People's Democratic Republic")
    lv: 'EUROPE', // "Republic of Latvia")
    lb: 'ASIA', // "Lebanese Republic")
    ls: 'AFRICA', // "Kingdom of Lesotho")
    lr: 'AFRICA', // "Republic of Liberia")
    ly: 'AFRICA', // "Libya")
    li: 'EUROPE', // "Principality of Liechtenstein")
    lt: 'EUROPE', // "Republic of Lithuania")
    lu: 'EUROPE', // "Grand Duchy of Luxembourg")
    mo: 'ASIA', // "Macao Special Administrative Region of China")
    mk: 'EUROPE', // "Republic of Macedonia")
    mg: 'AFRICA', // "Republic of Madagascar")
    mw: 'AFRICA', // "Republic of Malawi")
    my: 'ASIA', // "Malaysia")
    mv: 'ASIA', // "Republic of Maldives")
    ml: 'AFRICA', // "Republic of Mali")
    mt: 'EUROPE', // "Republic of Malta")
    mh: 'OCEANIA', // "Republic of the Marshall Islands")
    mq: 'NORTH_AMERICA', // "Martinique")
    mr: 'AFRICA', // "Islamic Republic of Mauritania")
    mu: 'AFRICA', // "Republic of Mauritius")
    yt: 'AFRICA', // "Mayotte")
    mx: 'NORTH_AMERICA', // "United Mexican States")
    fm: 'OCEANIA', // "Federated States of Micronesia")
    md: 'EUROPE', // "Republic of Moldova")
    mc: 'EUROPE', // "Principality of Monaco")
    mn: 'ASIA', // "Mongolia")
    me: 'EUROPE', // "Montenegro")
    ms: 'NORTH_AMERICA', // "Montserrat")
    ma: 'AFRICA', // "Kingdom of Morocco")
    mz: 'AFRICA', // "Republic of Mozambique")
    mm: 'ASIA', // "Republic of the Union of Myanmar")
    na: 'AFRICA', // "Republic of Namibia")
    nr: 'OCEANIA', // "Republic of Nauru")
    np: 'ASIA', // "Federal Democratic Republic of Nepal")
    nl: 'EUROPE', // "Kingdom of the Netherlands")
    nc: 'OCEANIA', // "New Caledonia")
    nz: 'OCEANIA', // "New Zealand")
    ni: 'NORTH_AMERICA', // "Republic of Nicaragua")
    ne: 'AFRICA', // "Republic of Niger")
    ng: 'AFRICA', // "Federal Republic of Nigeria")
    nu: 'OCEANIA', // "Niue")
    nf: 'OCEANIA', // "Norfolk Island")
    mp: 'OCEANIA', // "Commonwealth of the Northern Mariana Islands")
    no: 'EUROPE', // "Kingdom of Norway")
    om: 'ASIA', // "Sultanate of Oman")
    pk: 'ASIA', // "Islamic Republic of Pakistan")
    pw: 'OCEANIA', // "Republic of Palau")
    ps: 'ASIA', // "Occupied Palestinian Territory")
    pa: 'NORTH_AMERICA', // "Republic of Panama")
    pg: 'OCEANIA', // "Independent State of Papua New Guinea")
    py: 'LATIN_AMERICA', // "Republic of Paraguay")
    pe: 'LATIN_AMERICA', // "Republic of Peru")
    ph: 'ASIA', // "Republic of the Philippines")
    pn: 'OCEANIA', // "Pitcairn Islands")
    pl: 'EUROPE', // "Republic of Poland")
    pt: 'EUROPE', // "Portuguese Republic")
    pr: 'NORTH_AMERICA', // "Commonwealth of Puerto Rico")
    qa: 'ASIA', // "State of Qatar")
    re: 'AFRICA', // "Réunion")
    ro: 'EUROPE', // "Romania")
    ru: 'EUROPE', // "Russian Federation")
    rw: 'AFRICA', // "Republic of Rwanda")
    bl: 'NORTH_AMERICA', // "Saint Barthélemy")
    sh: 'AFRICA', // '654'
    kn: 'NORTH_AMERICA', // "Federation of Saint Kitts and Nevis")
    lc: 'NORTH_AMERICA', // "Saint Lucia")
    mf: 'NORTH_AMERICA', // "Saint Martin (French part)")
    pm: 'NORTH_AMERICA', // "Saint Pierre and Miquelon")
    vc: 'NORTH_AMERICA', // "Saint Vincent and the Grenadines")
    ws: 'OCEANIA', // "Independent State of Samoa")
    sm: 'EUROPE', // "Republic of San Marino")
    st: 'AFRICA', // "Democratic Republic of Sao Tome and Principe")
    sa: 'ASIA', // "Kingdom of Saudi Arabia")
    sn: 'AFRICA', // "Republic of Senegal")
    rs: 'EUROPE', // "Republic of Serbia")
    sc: 'AFRICA', // "Republic of Seychelles")
    sl: 'AFRICA', // "Republic of Sierra Leone")
    sg: 'ASIA', // "Republic of Singapore")
    sx: 'NORTH_AMERICA', // "Sint Maarten (Dutch part)")
    sk: 'EUROPE', // "Slovakia (Slovak Republic)")
    si: 'EUROPE', // "Republic of Slovenia")
    sb: 'OCEANIA', // "Solomon Islands")
    so: 'AFRICA', // "Somali Republic")
    za: 'AFRICA', // "Republic of South AFRICA")
    gs: 'Antarctica', // "South Georgia and the South Sandwich Islands")
    ss: 'AFRICA', // "Republic of South Sudan")
    es: 'EUROPE', // "Kingdom of Spain")
    lk: 'ASIA', // "Democratic Socialist Republic of Sri Lanka")
    sd: 'AFRICA', // "Republic of Sudan")
    sr: 'LATIN_AMERICA', // "Republic of Suriname")
    sj: 'EUROPE', // "Svalbard & Jan Mayen Islands")
    sz: 'AFRICA', // "Kingdom of Swaziland")
    se: 'EUROPE', // "Kingdom of Sweden")
    ch: 'EUROPE', // "Swiss Confederation")
    sy: 'ASIA', // "Syrian Arab Republic")
    tw: 'ASIA', // "Taiwan
    tj: 'ASIA', // "Republic of Tajikistan")
    tz: 'AFRICA', // "United Republic of Tanzania")
    th: 'ASIA', // "Kingdom of Thailand")
    tl: 'ASIA', // "Democratic Republic of Timor-Leste")
    tg: 'AFRICA', // "Togolese Republic")
    tk: 'OCEANIA', // "Tokelau")
    to: 'OCEANIA', // "Kingdom of Tonga")
    tt: 'NORTH_AMERICA', // "Republic of Trinidad and Tobago")
    tn: 'AFRICA', // "Tunisian Republic")
    tr: 'ASIA', // "Republic of Turkey")
    tm: 'ASIA', // "Turkmenistan")
    tc: 'NORTH_AMERICA', // "Turks and Caicos Islands")
    tv: 'OCEANIA', // "Tuvalu")
    ug: 'AFRICA', // "Republic of Uganda")
    ua: 'EUROPE', // "Ukraine")
    ae: 'ASIA', // "United Arab Emirates")
    gb: 'EUROPE', // "United Kingdom of Great Britain & Northern Ireland")
    us: 'NORTH_AMERICA', // "United States of America")
    um: 'OCEANIA', // "United States Minor Outlying Islands")
    vi: 'NORTH_AMERICA', // "United States Virgin Islands")
    uy: 'LATIN_AMERICA', // "Eastern Republic of Uruguay")
    uz: 'ASIA', // "Republic of Uzbekistan")
    vu: 'OCEANIA', // "Republic of Vanuatu")
    ve: 'LATIN_AMERICA', // "Bolivarian Republic of Venezuela")
    vn: 'ASIA', // "Socialist Republic of Vietnam")
    wf: 'OCEANIA', // "Wallis and Futuna")
    eh: 'AFRICA', // "Western Sahara")
    ye: 'ASIA', // "Yemen")
    zm: 'AFRICA', // "Republic of Zambia")
    zw: 'AFRICA', // "Republic of Zimbabwe");
  };

  return countryCodes[code.toLowerCase()] || '';
};
