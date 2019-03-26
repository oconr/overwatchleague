var findTeamID = function(name){
  return new Promise(function(resolve,reject){
    const stripped = JSON.stringify(name).replace(/\W/g, '').toLowerCase();
    if (["dallas","fuel","dallasfuel"].indexOf(stripped) > -1){
      resolve({"data":4523});
    } else if (["philadelphia","fusion","philadelphiafusion"].indexOf(stripped) > -1){
      resolve({"data":4524});
    } else if (["houston","outlaws","houstonoutlaws"].indexOf(stripped) > -1){
      resolve({"data":4525});
    } else if (["boston","uprising","bostonuprising"].indexOf(stripped) > -1){
      resolve({"data":4402});
    } else if (["new","york","excelsior","newyork","newyorkexcelsior","nyxl"].indexOf(stripped) > -1){
      resolve({"data":4403});
    } else if (["san","francisco","shock","sanfrancisco","sanfranciscoshock"].indexOf(stripped) > -1){
      resolve({"data":4404});
    } else if (["valiant","losangelesvaliant","lavaliant"].indexOf(stripped) > -1){
      resolve({"data":4405});
    } else if (["gladiators","losangelesgladiators","lagladiators"].indexOf(stripped) > -1){
      resolve({"data":4406});
    } else if (["florida","mayhem","floridamayhen"].indexOf(stripped) > -1){
      resolve({"data":4407});
    } else if (["shanghai","dragons","shanghaidragons"].indexOf(stripped) > -1){
      resolve({"data":4408});
    } else if (["seoul","dynasty","seouldynasty"].indexOf(stripped) > -1){
      resolve({"data":4409});
    } else if (["london","spitfire","londonspitfire"].indexOf(stripped) > -1){
      resolve({"data":4410});
    } else if (["chengdu", "hunters", "chengduhunters"].indexOf(stripped) > -1){
      resolve({"data": 7692});
    } else if (["hangzhou", "spark", "hangzhouspark"].indexOf(stripped) > -1){
      resolve({"data": 7693});
    } else if (["paris", "eternal", "pariseternal"].indexOf(stripped) > -1){
      resolve({"data": 7694});
    } else if (["toronto", "defiant", "torontodefiant"].indexOf(stripped) > -1){
      resolve({"data": 7695});
    } else if (["vancouver", "titans", "vancouvertitans"].indexOf(stripped) > -1){
      resolve({"data": 7696});
    } else if (["washington", "justice", "washingtonjustice"].indexOf(stripped) > -1){
      resolve({"data": 7697});
    } else if (["atlanta", "reign", "atlantareign"].indexOf(stripped) > -1){
      resolve({"data": 7698});
    } else if (["guangzhou", "charge", "guangzhoucharge"].indexOf(stripped) > -1){
      resolve({"data": 7699});
    } else {
      resolve({"data":`Could not find ID for ${name}`});
    }
  });
}

module.exports = findTeamID;
