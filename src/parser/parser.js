/* eslint-disable space-infix-ops */
/* eslint-disable linebreak-style */
/* eslint-disable no-undef */
/* eslint-disable space-in-parens */
/* eslint-disable quotes */
/* eslint-disable linebreak-style */
const cheerio = require("cheerio");

const text = `
<p>Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.</p>\n<p></p>\n<img src=\"https://api.test.test.com/files/149/data/file.png\" alt=\"\" style=\"float:none;height: auto;width: auto\"/>\n<p></p>\n<p>Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring. Great!.</p>\n<p></p>\n<img src=\"https://api.test.test.com/files/151/data/file.png\" alt=\"\" style=\"float:none;height: auto;width: auto\"/>\n<p>Thats it!</p>\n`;

const $ = cheerio.load(text,{
    withDomLvl1: true,
    normalizeWhitespace: false,
    xmlMode: true,
    decodeEntities: true
});
// $('img').attr('src', '2')

$("img").each(function(i) {
	const url = $(this).attr().src;
	let id = url.match(/(?!\/)(\d+)(?=\/)/, "");
	id = id ? id[1] : null;
	$(this).attr("src", `[[FILE=${id}]]`);
});
console.log($.html());
