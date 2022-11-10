// TODO: 컨트롤러 코드
const User = require("../model/User");

exports.main = (req, res) => {
  res.render("index");
};

exports.signup = (req, res) => {
  res.render("signup");
};

exports.signin = (req, res) => {
  res.render("signin");
};

exports.overlap = (req, res) => {
    User.overlap(req.body, (result) => {
      console.log("overlap", result);
      if (result === undefined){
        res.send(false); // 중복검사 통과 
      } else{ 
        res.send(true); // 중복검사 불통과 
      }
    });
  };


exports.signupBtn = (req, res) => {
  User.signupBtn(req.body, (result) => {
    console.log("signupBtn", result);
    res.send();
  });
};

exports.signinBtn = (req, res) => {
  User.signinBtn(req.body, (result) => {
    //   console.log("signinBtn", result.userid);
    //   console.log("signinBtn", result.pw);
    //   console.log("signinBtn", result.name);
    console.log(result);
    if (result == undefined) {
      res.send(false);
    } else{
    res.send(true);
    }
  });
};

exports.profile = (req, res) => {
    console.log(req.body);
    User.profile(req.body, (result) => {
        console.log("profile", result);
        if (result == undefined){
            res.redirect('/user/signin')
        }
        res.render("profile", {data:result});
      });
};

// exports.allProfile = (req, res) => {
//     console.log(req.body);
//     User.allProfile(req.body, (result) => {
//         console.log('allprofile',result);
//         res.render("allProfile", {data:result});
//       });
// };


exports.editProfile = (req, res) => {
  
    User.editProfile(req.body, () => {

        res.send('수정성공')
    });
};


exports.deleteProfile = (req, res) => {
  
    User.editProfile(req.body, () => {
    
        res.redirect('/user/signin')
    });
};



