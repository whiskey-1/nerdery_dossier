/**
 * Created by mikelseverson on 9/16/15.
 */
var Profile = require('../models/profile'),
    Event = require('../models/event'),
    profile = {};

//Create Profile
profile.create = function() {
    var newProfile = new Profile({
        contact: {
            givenName: "dsadsdsdsa",
            emailAddress: "dsadas@gmail.com"
        },
        bio: {
            age: 1
        }
    });
    newProfile.save(function (err) {
        if (err) console.log(err);
    });
    return newProfile;
};

//Edit a preexisting profile
profile.editById = function(id) {
    Profile.findById(id);
};

//Query profile by emailAddress
profile.findByEmail = function(emailAddress) {
    Profile.findOne({'contact.emailAddress' : emailAddress})
        .populate('meetings')
        .exec(function(err, profile) {
            if(err) console.log(err);
            return profile;
        });
};

//Remove a profile
profile.Remove = function(id) {
    Profile.findOne({});
};

module.exports = profile;