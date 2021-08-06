const mongoose = require("mongoose")
const Schema = mongoose.Schema;
const addMakeupArtist = new Schema({
    makeupArtistName: {
        type: String
    },
    email: {
        type: String
    },
    phoneNumber: {
        type: Number
    },
    address: {
        type: String
    },
    city: {
        type: String
    },
    state: {
        type: String
    },
    pinCode: {
        type: String
    },
    travelToOutstation: {
        type: String
    },
    ladiesServices: {
        hairStyling: {
            hairCut: {
                value: {
                    type: Boolean,
                    default: false
                }

            },
            ironing: {
                value: {
                    type: Boolean,
                    default: false
                }

            },
            globalColouring: {
                value: {
                    type: Boolean,
                    default: false
                }

            },
            blowDry: {
                value: {
                    type: Boolean,
                    default: false
                }

            },
            rootTouchUp: {
                value: {
                    type: Boolean,
                    default: false
                }

            },
            shampooConditioning: {
                value: {
                    type: Boolean,
                    default: true
                }

            },
            headMassage: {
                value: {
                    type: Boolean,
                    default: false
                }

            },
            rollerSetting: {
                value: {
                    type: Boolean,
                    default: false
                }

            },
            oiling: {
                value: {
                    type: Boolean,
                    default: false
                }

            }
        },
        makeUp: {
            partyMakeUp: {
                value: {
                    type: Boolean,
                    default: false
                }

            },
            engagementMakeUp: {
                value: {
                    type: Boolean,
                    default: false
                }

            },
            bridalReceptionMakeUp: {
                value: {
                    type: Boolean,
                    default: false
                }

            },
            baseMakeUp: {
                value: {
                    type: Boolean,
                    default: false
                }

            },
            eyeMakeUp: {
                value: {
                    type: Boolean,
                    default: false
                }

            }
        },
        hairTexture: {
            rebonding: {
                value: {
                    type: Boolean,
                    default: false
                }

            },
            perming: {
                value: {
                    type: Boolean,
                    default: false
                }

            },
            keratin: {
                value: {
                    type: Boolean,
                    default: false
                }

            },
            colourProtection: {
                value: {
                    type: Boolean,
                    default: true
                }

            },
            smoothening: {
                value: {
                    type: Boolean,
                    default: false
                }

            }
        },
        hairTreatments: {
            spaTreatments: {
                value: {
                    type: Boolean,
                    default: false
                }

            },
            volumizing: {
                value: {
                    type: Boolean,
                    default: false
                }

            },
            advancedHairMoisturising: {
                value: {
                    type: Boolean,
                    default: false
                }

            },
            scalpTreatments: {
                value: {
                    type: Boolean,
                    default: false
                }

            }
        },
        facialsRituals: {
            bleach: {
                value: {
                    type: Boolean,
                    default: false
                }

            },
            luxuryFacialsRituals: {
                value: {
                    type: Boolean,
                    default: false
                }

            },
            cleanUps: {
                value: {
                    type: Boolean,
                    default: false
                }

            },
            bodyPolishingRejuvenation: {
                value: {
                    type: Boolean,
                    default: false
                }

            },
            threading: {
                value: {
                    type: Boolean,
                    default: false
                }

            }
        },
        handFeet: {
            manicure: {
                value: {
                    type: Boolean,
                    default: false
                }

            },
            spaPedicure: {
                value: {
                    type: Boolean,
                    default: false
                }

            },
            pedicure: {
                value: {
                    type: Boolean,
                    default: false
                }

            },
            waxing: {
                value: {
                    type: Boolean,
                    default: false
                }

            },
            spaManicure: {
                value: {
                    type: Boolean,
                    default: false
                }

            }
        },
        nailCare: {
            nailPaint: {
                value: {
                    type: Boolean,
                    default: false
                }

            },
            nailArt: {
                value: {
                    type: Boolean,
                    default: false
                }

            },
            nailFilling: {
                value: {
                    type: Boolean,
                    default: false
                }

            }
        }
    },

    gentsServices: {
        hairCutFinish: {
            cutandHairCare: {
                value: {
                    type: Boolean,
                    default: false
                }

            },
            shampooConditioning: {
                value: {
                    type: Boolean,
                    default: false
                }

            },
            headMassage: {
                value: {
                    type: Boolean,
                    default: false
                }

            },
            beardStyling: {
                value: {
                    type: Boolean,
                    default: false
                }

            },
            hairBeardColouring: {
                value: {
                    type: Boolean,
                    default: false
                }

            }
        },
        hairColour: {
            hiLites: {
                value: {
                    type: Boolean,
                    default: false
                }

            },
            beardColour: {
                value: {
                    type: Boolean,
                    default: false
                }

            },
            hairColourAmmoniaAmmoniaFree: {
                value: {
                    type: Boolean,
                    default: false
                }

            }
        },
        hairTexture: {
            straightening: {
                value: {
                    type: Boolean,
                    default: false
                }

            },
            smoothening: {
                value: {
                    type: Boolean,
                    default: false
                }

            },
            rebonding: {
                value: {
                    type: Boolean,
                    default: false
                }

            },
            perming: {
                value: {
                    type: Boolean,
                    default: false
                }

            }
        },
        hairTreatments: {
            hairSpa: {
                value: {
                    type: Boolean,
                    default: false
                }

            },
            advancedMoisturising: {
                value: {
                    type: Boolean,
                    default: false
                }

            },
            scalpTreatments: {
                value: {
                    type: Boolean,
                    default: false
                }

            },
            colourProtection: {
                value: {
                    type: Boolean,
                    default: false
                }

            }
        },
        skinCare: {
            cleanUps: {
                value: {
                    type: Boolean,
                    default: false
                }

            },
            facials: {
                value: {
                    type: Boolean,
                    default: false
                }

            },
            organicTreatments: {
                value: {
                    type: Boolean,
                    default: false
                }

            },
            manicure: {
                value: {
                    type: Boolean,
                    default: false
                }

            },
            pedicure: {
                value: {
                    type: Boolean,
                    default: false
                }

            }
        },
        beardGrooming: {
            beardTrim: {
                value: {
                    type: Boolean,
                    default: false
                }

            },
            beardColour: {
                value: {
                    type: Boolean,
                    default: false
                }

            },
            beardStyling: {
                value: {
                    type: Boolean,
                    default: false
                }

            },
            shave: {
                value: {
                    type: Boolean,
                    default: false
                }

            },
            luxuryShaveBeardSpa: {
                value: {
                    type: Boolean,
                    default: false
                }

            }
        }
    },
    airBrushBridalMakeup: {
        type: Number
    },
    bridalMakeup: {
        type: Number
    },
    guestMakeup: {
        type: Number
    },
    trialMakeup: {
        type: Number
    },
    travelPolicy: {
        type: String
    },
    paymentPolicy: {
        type: String
    },
    cancellationPolicy: {
        type: String
    },
    payments: {
        debitCardsCreditCard: {
            type: Boolean,
            default: false
        },
        membershipCard: {
            type: Boolean,
            default: false
        },
        cashonly: {
            type: Boolean,
            default: false
        }
    }

})
const AddMakeUp = mongoose.model("addmakeup", addMakeupArtist);
module.exports = AddMakeUp;
