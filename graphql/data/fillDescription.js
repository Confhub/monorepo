const fs = require('fs');
const path = require('path');
const axios = require('axios');
const { JSDOM, VirtualConsole } = require('jsdom');

const virtualConsole = new VirtualConsole();

const ROOT = './data';

const url = 'http://www.covalenceconf.com';

async function init() {
  const list = JSON.parse(
    fs.readFileSync(path.resolve(ROOT, './sanitizedData.json')),
  );

  if (!list) {
    throw Error('Unable to load conferences');
  }

  const urls = list.map(i => axios(i.url));

  const pages = await Promise.all(urls);

  const values = pages.map(page => {
    const dom = new JSDOM(page.data, { virtualConsole });

    const description = dom.window.document.head.querySelector(
      'meta[name=description]',
    );

    return description && description.getAttribute('content');
  });

  console.log(values.length);

  const newList = list.map((item, index) => {
    return {
      ...item,
      description: values[index] || '',
    };
  });

  fs.writeFileSync(
    path.resolve(ROOT, './sanitizedData.json'),
    JSON.stringify(newList, null, 2),
  );
}

init();
