/* eslint-disable no-cond-assign */
/* eslint-disable no-console */
// https://www.hackerrank.com/challenges/matching-specific-string/problem

const str = `The hackerrank team is on a mission to flatten 
the world by restructuring the DNA of every company on the planet.`;

const regx = /hackerrank/gm;

const result = str.match(regx);
console.log(result);

// https://www.hackerrank.com/challenges/matching-digits-non-digit-character/problem

const str2 = '06-11-2015';
const regx2 = /\d\d\D\d\d\D\d\d\d\d/; // \d+\D\d+\D\d+

const result2 = str2.match(regx2);
console.log(result2);

// https://www.hackerrank.com/challenges/matching-word-non-word/problem

const str3 = 'www.hackerrank.com';
const regx3 = /\w\w\w\W\w\w\w\w\w\w\w\w\w\w\W\w\w\w/; // \w+\W\w+\W\w+

const result3 = str3.match(regx3);
console.log(result3);

// https://www.hackerrank.com/challenges/matching-start-end/problem

const str4 = '0qwer.';
const regx4 = /^\d\w\w\w\w\W$/; // ^\d\w+\W$

const result4 = str4.match(regx4);
console.log(result4);

// https://www.hackerrank.com/challenges/matching-x-y-repetitions/problem

const str5 = '3threeormorealphabets8';
const regx5 = /^\d{1,2}\w{3,}[.]{0,3}$/;

const result5 = str5.match(regx5);
console.log(result5);

// https://www.hackerrank.com/challenges/split-number/problem
// `CountryCode=[Country Code],LocalAreaCode=[Local Area Code],Number=[Number]`
// 91-011-23413627

function processData(input) {
  const regex = /(\d{1,3})[- ](\d{1,3})[- ](\d{4,10})/gm;
  let match;
  while ((match = regex.exec(input))) {
    console.log(`CountryCode=${match[1]},LocalAreaCode=${match[2]},Number=${match[3]}`);
  }
}

const inp = `2
2 877 2638277
188-547-5864327428
891-454-9195497623
648-42-380306686
824-417-6460145493
489-16-9839392781
91-011-23413627`;
processData(inp);
// processData('910 011 23413627');

// https://www.hackerrank.com/challenges/detect-html-tags/problem
function processData2(input) {
  const re = /<\s*(\w+)[^>]*>/gim;
  const tagSet = new Set();
  let match = null;
  while ((match = re.exec(input))) {
    console.log(match);
    tagSet.add(match[1]);
  }
  console.log(Array.from(tagSet).sort().join(';'));
}

const inp2 = `<p><a href="http://www.quackit.com/html/tutorial/html_links.cfm">Example Link</a></p>
<div class="more-info"><a href="http://www.quackit.com/html/examples/html_links_examples.cfm">More Link Examples...</a></div>`;

processData2(inp2);

// https://www.hackerrank.com/challenges/html-attributes/problem
function processData3(input) {
  const r = /<(\w+).*?>/g;
  const r2 = /(\w+)=["'].*?["']/g;
  const ob = {};
  let m = null;
  let m2 = null;
  while ((m = r.exec(input))) {
    if (!ob.hasOwnProperty(m[1])) {
      ob[m[1]] = new Set();
    }
    while ((m2 = r2.exec(m[0]))) {
      ob[m[1]].add(m2[1]);
    }
  }
  Object.keys(ob)
    .sort()
    .forEach((e) => {
      console.log(`${e}:${[...ob[e]].sort().join(',')}`);
    });
}

const inp3 = `<li style="-moz-float-edge: content-box">... that <a href="/wiki/Orval_Overall" title="Orval Overall">Orval Overall</a> <i>(pictured)</i> is the only <b><a href="/wiki/List_of_Major_League_Baseball_pitchers_who_have_struck_out_four_batters_in_one_inning" title="List of Major League Baseball pitchers who have struck out four batters in one inning">Major League Baseball player to strike out four batters in one inning</a></b> in the <a href="/wiki/World_Series" title="World Series">World Series</a>?</li>
<li style="-moz-float-edge: content-box">... that the three cities of the <b><a href="/wiki/West_Triangle_Economic_Zone" title="West Triangle Economic Zone">West Triangle Economic Zone</a></b> contribute 40% of Western China's GDP?</li>
<li style="-moz-float-edge: content-box">... that <i><a href="/wiki/Kismet_(1943_film)" title="Kismet (1943 film)">Kismet</a></i>, directed by <b><a href="/wiki/Gyan_Mukherjee" title="Gyan Mukherjee">Gyan Mukherjee</a></b>, ran at the <a href="/wiki/Roxy_Cinema_(Kolkata)" title="Roxy Cinema (Kolkata)">Roxy, Kolkata</a>, for 3 years and 8 months?</li>
<li style="-moz-float-edge: content-box">... that <a href="/wiki/Vauix_Carter" title="Vauix Carter">Vauix Carter</a> both coached and played for the <b><a href="/wiki/1882_Navy_Midshipmen_football_team" title="1882 Navy Midshipmen football team">1882 Navy Midshipmen football team</a></b>?</li>
<li style="-moz-float-edge: content-box">... that <a href="/wiki/Zhu_Chenhao" title="Zhu Chenhao">Zhu Chenhao</a> was sentenced to <a href="/wiki/Slow_slicing" title="Slow slicing">slow slicing</a> for leading the <b><a href="/wiki/Prince_of_Ning_rebellion" title="Prince of Ning rebellion">Prince of Ning rebellion</a></b> against the <a href="/wiki/Ming_Dynasty" title="Ming Dynasty">Ming Dynasty</a> <a href="/wiki/Zhengde_Emperor" title="Zhengde Emperor">emperor Zhengde</a>?</li>
<li style="-moz-float-edge: content-box">... that <b><a href="/wiki/Mirza_Adeeb" title="Mirza Adeeb">Mirza Adeeb</a></b> was a prominent modern Pakistani <a href="/wiki/Urdu" title="Urdu">Urdu</a> playwright whose later work focuses on social problems and daily life?</li>
<li style="-moz-float-edge: content-box">... that in <i><b><a href="/wiki/La%C3%9Ft_uns_sorgen,_la%C3%9Ft_uns_wachen,_BWV_213" title="Lat uns sorgen, lat uns wachen, BWV 213">Die Wahl des Herkules</a></b></i>, Hercules must choose between the good cop and the bad cop?<br style="clear:both;" />
<div style="text-align: right;" class="noprint"><b><a href="/wiki/Wikipedia:Recent_additions" title="Wikipedia:Recent additions">Archive</a></b>  <b><a href="/wiki/Wikipedia:Your_first_article" title="Wikipedia:Your first article">Start a new article</a></b>  <b><a href="/wiki/Template_talk:Did_you_know" title="Template talk:Did you know">Nominate an article</a></b></div>
</li>`;

processData3(inp3);
