export interface IRFRulesSection {
  number: string;
  title: string;
  content: string;
  subsections?: IRFRulesSection[];
}

export interface IRFRulesChapter {
  number: string;
  title: string;
  sections: IRFRulesSection[];
}

export interface IRFRulesData {
  title: string;
  lastUpdated: string;
  overview: string;
  chapters: IRFRulesChapter[];
}

export const irfRulesData: IRFRulesData = {
  title: "International Roundnet Federation Rules",
  lastUpdated: "October 17, 2025",
  overview: "Roundnet is a team sport played by two teams consisting of two players each. Opposing team members line up across from each other with the roundnet set in the center. A point begins when the server hits the ball off the net towards the opposing player. After the service, there are no sides or boundaries. The object of the game is to hit the ball off the net in such a way that the opposing team cannot successfully return it.\n\nA team is allowed up to three touches to return the ball onto the net. Once the ball is played off the net, possession switches to the opposing team. The rally continues until a team is unable to legally return the ball. Players may move as they wish during a point, so long as they don't physically impede the opponent's play on the ball.\n\nResponsibility for fair play falls on the players. All players are expected to know the rules, and the integrity of roundnet depends on each player upholding them. Highly competitive play is encouraged, but never at the expense of mutual respect among competitors, adherence to the rules, or the basic joy of play.",
  chapters: [
    {
      number: "1",
      title: "Equipment and Court",
      sections: [
        {
          number: "1.1",
          title: "Equipment",
          content: "",
          subsections: [
            {
              number: "1.1.1",
              title: "Regulation Equipment",
              content: "IRF approved set and ball are to be used for official tournament play."
            },
            {
              number: "1.1.2",
              title: "Set Dimensions",
              content: "The set is circular with an inner diameter at the top of 91.4 cm (36 in) and a height of 20.3 cm (8 in) with a net on top."
            },
            {
              number: "1.1.3",
              title: "Net Tension",
              content: "The tension on the net should be consistent throughout. A ball dropped from a height of 1.5 m (4.9 ft) from the ground should bounce 50 cm (19.7 in) from the net, measuring from the bottom of the ball."
            },
            {
              number: "1.1.4",
              title: "Ball Characteristics",
              content: "The ball weight is 85g (± 5g tolerance). The ball circumference is 330mm (± 10 mm tolerance.) The ball must be made of a suitable material and allow for internal pressure adjustment."
            },
            {
              number: "1.1.5",
              title: "Ball Inflation",
              content: "The air pressure of the ball should be between 2000 pascals and 3500 pascals (0.3 and 0.5 PSI) and a circumference of between 29 - 31 cm (11.4 - 12.2 in)."
            }
          ]
        },
        {
          number: "1.2",
          title: "Court",
          content: "",
          subsections: [
            {
              number: "1.2.1",
              title: "Court Components",
              content: "A roundnet court consists of the set, outer boundary lines, service lines, No Hit Zone lines, and designated playing space."
            },
            {
              number: "1.2.2",
              title: "Court Setup",
              content: "The roundnet set is placed in the center of the court."
            },
            {
              number: "1.2.3",
              title: "Outer Boundary Lines",
              content: "An outer boundary should be drawn as a circle with a radius of 8.5 meters (27.9 feet) from the center of the court. When indoors or unable to draw lines, tape may be placed at equal intervals around the set to outline a circle."
            },
            {
              number: "1.2.4",
              title: "Serving Lines",
              content: "A serving line circle should be drawn 2.6 meters (8.5 feet) from the center of the court. The distance from the edge of the set to the service line should be 2.13 meters (7 feet). Marks should be drawn at each of the four starting service positions. When indoors or unable to draw lines, tape may be placed at equal intervals around the set to outline a circle and service positions."
            },
            {
              number: "1.2.5",
              title: "No Hit Zone Lines",
              content: "A no hit zone line circle should be drawn 100cm (3.28 feet) from the center of the court for all divisions. When indoors or unable to draw lines, tape may be placed at equal intervals around the set to outline a circle. Additional marking of the No Hit Zone is allowed (for example a turf mat) as long as it is safe and does not interfere with gameplay."
            }
          ]
        }
      ]
    },
    {
      number: "2",
      title: "Participants",
      sections: [
        {
          number: "2.1",
          title: "Team Composition",
          content: "A team consists of 2 players."
        },
        {
          number: "2.2",
          title: "Player Equipment / Clothing",
          content: "",
          subsections: [
            {
              number: "2.2.1",
              title: "Footwear",
              content: "Players may wear cleats, sneakers, or play barefoot at their own risk. Cleats with dangerous parts, such as metallic baseball cleats, track spikes, or worn or broken studs with sharp edges, are not allowed."
            },
            {
              number: "2.2.2",
              title: "Clothing",
              content: "Players may wear anything that does not endanger player safety or provide unfair advantage."
            },
            {
              number: "2.2.3",
              title: "Equipment Usage",
              content: "Players may not use clothing or equipment to unfairly inhibit or assist the movement of the ball or another player. For example, players are allowed to wear hats, but not allowed to throw their hats at the ball."
            },
            {
              number: "2.2.4",
              title: "Tournament Director Authority",
              content: "The tournament director reserves the right to refuse any player equipment or clothing that does not abide by these guidelines."
            }
          ]
        },
        {
          number: "2.3",
          title: "Team Name and Uniform",
          content: "IRF reserves the right to alter a team name, team logo, jersey graphic, or uniform if it is inappropriate for the specific event or the organization as a whole."
        }
      ]
    },
    {
      number: "3",
      title: "Playing Format",
      sections: [
        {
          number: "3.1",
          title: "To Score a Point",
          content: "Roundnet is played using rally scoring; points can be won by the serving or receiving team. A team scores a point when:",
          subsections: [
            {
              number: "3.1.1",
              title: "",
              content: "The opposing team fails to legally return the ball to the set."
            },
            {
              number: "3.1.2",
              title: "",
              content: "The opposing team commits a point-loss infraction."
            },
            {
              number: "3.1.3",
              title: "",
              content: "The opposing team's server has two successive faults."
            }
          ]
        },
        {
          number: "3.2",
          title: "Replay",
          content: "A point is replayed when:",
          subsections: [
            {
              number: "3.2.1",
              title: "",
              content: "Teams disagree on the legality of a hit."
            },
            {
              number: "3.2.2",
              title: "",
              content: "Teams disagree on an infraction."
            },
            {
              number: "3.2.3",
              title: "",
              content: "Certain types of hinders occur, see Chapter 6 for details."
            },
            {
              number: "3.2.4",
              title: "",
              content: "There is outside interference (ie a player, ball, or other object from outside a match impedes on the game)."
            },
            {
              number: "3.2.5",
              title: "",
              content: "If a point is replayed due to disagreement on the legality of the serve, the server will replay the point with the fault count at the time of the disagreement. Otherwise, the server will start on their first serve. Score, positions and serving order remain the same in all cases."
            }
          ]
        },
        {
          number: "3.3",
          title: "Rally",
          content: "A rally is a sequence of playing actions between the moment the serve is hit to the moment the ball is out of play.",
          subsections: [
            {
              number: "3.3.1",
              title: "",
              content: "If the serving team wins a rally, they score a point and continue to serve."
            },
            {
              number: "3.3.2",
              title: "",
              content: "If the receiving team wins a rally, they score a point and must serve next."
            }
          ]
        },
        {
          number: "3.4",
          title: "To Win a Game",
          content: "A game is won by the team that first scores the designated number of points (typically 15 or 21).",
          subsections: [
            {
              number: "3.4.1",
              title: "",
              content: "Games must be won by two points unless otherwise specified. In the case of a 14-14 or 20-20 tie, play is continued until a 2 point lead is achieved (17-15 or 27-25)."
            },
            {
              number: "3.4.2",
              title: "Hard cap",
              content: "According to the tournament director's discretion, certain games can be given a hard cap, meaning if the score is tied at a given number, the next point wins. For example, in games with a hard cap at 25, if the score is 24 to 24, the game will be decided by the next point. Hard caps should be set before the games start."
            }
          ]
        },
        {
          number: "3.5",
          title: "To Win a Match",
          content: "A match is won when a team wins the designated number of games (typically 2)."
        },
        {
          number: "3.6",
          title: "Forfeit",
          content: "A team that is not able or refuses to play when summoned to do so may be subject to a forfeit loss at the tournament director's discretion."
        },
        {
          number: "3.7",
          title: "Deciding Serve/Receive",
          content: "",
          subsections: [
            {
              number: "3.7.1",
              title: "One game",
              content: "The winner of a coin flip or one game of Rock, Paper, Scissors (determined by TD) gets to choose serve/receive or starting positions."
            },
            {
              number: "3.7.2",
              title: "Two game matches",
              content: "In bracket play, the team with the higher seed gets to choose serve/receive, starting positions, or defer in game one. If the higher seed defers their choice, the lower seed gets to choose serve/receive or starting positions in game one. The choice of serve/receive or starting positions will switch in the second game."
            },
            {
              number: "3.7.3",
              title: "Three-game matches",
              content: "If the match goes to a third game, there will be a coin flip or one game of Rock, Paper, Scissors (determined by TD) and the winner is awarded the choice of serve/receive or pick the starting positions in the third game."
            }
          ]
        },
        {
          number: "3.8",
          title: "Positions",
          content: "",
          subsections: [
            {
              number: "3.8.1",
              title: "",
              content: "The four players start set up in four positions around the set, 90 degrees apart. Teammates are located next to each other. All players must start with all points of contact behind the service line (exception see 3.8.4)."
            },
            {
              number: "3.8.2",
              title: "",
              content: "The established positions should be used for the duration of the match. The positions will be indicated by a line marking when possible."
            },
            {
              number: "3.8.3",
              title: "",
              content: "At the start of a game, the serving team sets their positions first. The player set up on the right side is the one that will begin serving. Once the serving team is set, the receiving team positions their players."
            },
            {
              number: "3.8.4",
              title: "",
              content: "The receiver is the player that is positioned 180 degrees across from the server. Once the server is set the receiver may adjust their position and is free to move anywhere without distance restrictions."
            },
            {
              number: "3.8.5",
              title: "",
              content: "Only the designated receiver can field the serve."
            },
            {
              number: "3.8.6",
              title: "",
              content: "The server's teammate is free to move from their position at any point. They do not need to return to their position on subsequent service attempts within the same point.",
              subsections: [
                {
                  number: "3.8.6.1",
                  title: "",
                  content: "The server's teammate must remain outside the serving line until the serve is hit and may not cross in front of the receiver or the receiver's teammate before the receiver has touched the ball. The server's teammate must maintain a minimum distance of 1.5 meters from the receiver and the receiver's partner until the receiver has touched the ball. All hinder rules are in effect (see chapter 6)."
                }
              ]
            },
            {
              number: "3.8.7",
              title: "",
              content: "The receiver's teammate is free to move from their position at any point.",
              subsections: [
                {
                  number: "3.8.7.1",
                  title: "",
                  content: "The receiver's teammates' movement must follow an imaginary straight line extending from the center of the court through their starting position."
                },
                {
                  number: "3.8.7.2",
                  title: "",
                  content: "The receiver's teammates must remain outside the serving line until the serve is hit."
                }
              ]
            },
            {
              number: "3.8.8",
              title: "",
              content: "Players rotate one position counterclockwise to equalize conditions each time two servers finish their turn. (i.e. after the 3rd point, 7th point, 11th point, 15th point, etc.)."
            },
            {
              number: "3.8.9",
              title: "",
              content: "If a non-receiving or non-serving player moves in an illegal manner during the serving sequence, they lose the point. In the case where both non-receiving and non-serving player move illegally, the team that moved illegally first will lose the point. If the infractions happen simultaneously the point will be replayed."
            }
          ]
        },
        {
          number: "3.9",
          title: "Time-outs",
          content: "",
          subsections: [
            {
              number: "3.9.1",
              title: "60-second timeouts",
              content: "Teams are allotted one 60-second timeout per game. The time-out may not be called during a point. This time-out may not be called in between the 1st and 2nd serve. The teams may not leave the court area and should have refreshments or equipment stored near the court before the match."
            },
            {
              number: "3.9.2",
              title: "Injury timeouts",
              content: "An injured player is given a maximum of 5-minutes recovery, once per match. This time-out may be called whenever the injury occurs. See 3.13.1 for details."
            }
          ]
        },
        {
          number: "3.10",
          title: "Time Between Points",
          content: "Points should be played in succession without breaks. After the rally has finished the ball should be recovered immediately. Once the ball has been recovered and given to the server, all players must set their position. Any delay before service is announced will result in a delay of game warning. Any subsequent violations against the same team will result in (1) automatic use of a regular timeout, if still available, or (2) a loss of point, if the team does not have a regular timeout remaining."
        },
        {
          number: "3.11",
          title: "Time Between Games",
          content: "Players will be given 3 minutes between games. Players should remain near their court. Failure to be ready to start after the break will result in a delay of game warning at 3 minutes. If players aren't set within the next minute, one point will be given to the opposing team. An additional point will be assessed for every minute teams are late."
        },
        {
          number: "3.12",
          title: "Changing and Adjusting Equipment",
          content: "In the case of a set or ball no longer being suitable for play, the game shall pause while a replacement is found. When replaced, the game resumes at the same score, player positions, and serving order and situation (ie 1st vs 2nd serve, # of timeouts remaining, penalties/warning still in effect, etc.) as before. If a net gets moved out of position or gets altered from its original state (ie a leg piece gets turned in, the net comes off a hook, etc.) it should be returned to its original position and state before players set for the next point. During a point players should play through natural movement of the equipment. However, if the equipment should become unplayable (net snaps, ball pops, etc.), the point should be stopped and replayed with any faults resetting."
        },
        {
          number: "3.13",
          title: "Exceptional Interruptions",
          content: "",
          subsections: [
            {
              number: "3.13.1",
              title: "Injury",
              content: "In the case of an injury, the game is stopped. Once the player begins to receive care (if provided), they have 5 minutes to return to play. If the player is not able to return to play before 5 minutes is up, the team must forfeit that game. If the player returns to play and is injured again, they must return to play in one minute or be subject to forfeit. Any further injury stoppage during the game that lasts more than 15 seconds between points will cause the injured player to forfeit."
            },
            {
              number: "3.13.2",
              title: "External interference",
              content: "In the case of an external interference preventing the game to be played, the game shall pause. When the game can be resumed, the game continues at the same score, player positions, and serving order and situation (ie 1st vs 2nd serve, # of timeouts remaining, penalties/warning still in effect, etc.) as before."
            }
          ]
        }
      ]
    },
    {
      number: "4",
      title: "Serving",
      sections: [
        {
          number: "4.1",
          title: "First serve of the game",
          content: "The winner of a coin flip or one game of Rock, Paper, Scissors (determined by TD) gets to choose serve/receive or starting positions. In bracket play, the higher seed can choose serve/receive, side or defer (see 3.7)."
        },
        {
          number: "4.2",
          title: "Serving order",
          content: "The first server starts to the right of their partner and serves for only one point. After the first point, each team serves two points in a row and all servers start from the left of their partner. After the server's first point, they switch positions with their partner and serve to the other member of the opposing team. This sequence continues until the end of the match. If teams reach a win by two and the target score is reached (i.e. the score is 21 - 20) then each player serves for one point and players keep the same positions for the rest of the game. Order in a New Game - The process stated in 4.2.1 occurs each game so the serving order does not need to stay the same for multiple games."
        },
        {
          number: "4.3",
          title: "Characteristics of the serve",
          content: "Before serving, the server must set their position with all points of contact behind the 7-foot service line. After setting the service position and during the act of serving – including the swing, the follow-through, and the momentum from the action – all points of contact must remain behind the service line. At least one foot must maintain the same single point of contact with the ground until the ball hits the net. Sliding or dragging a foot on the ground at any point before the ball hits the net is a violation. The server may take one step in any direction. A step is initiated the moment a foot no longer maintains a point of contact with the ground. Once the stepping foot contacts the ground again, it must establish and maintain the same single point of contact on the ground until the ball hits the net. The ball must travel at least 10 cm (4 inches) away from the point of release before it is struck. The ball cannot be released and struck with the same hand. Exception - players with physical limitations are excluded from this rule. In the act of serving, the ball must not be caught. A catch happens when the ball comes to rest on any part of the player. Serves may not be higher than a receiver's shoulder when in an athletic stance. The ball can not land on or within the No Hit Zone lines."
        },
        {
          number: "4.4",
          title: "Execution of the service",
          content: "There are four steps to the serve: (1) The server announces the score to the receiver, placing the serving team's score before the receiving team's score and the serve number (first or second). (2) The receiver must verbally acknowledge readiness within three seconds. (3) The server must announce service within three seconds. (4) The server may begin their serving motion and has three seconds to toss the ball. Any delays in this process are subject to a delay of game violation (see 3.10). An incorrect score call may be identified by any player to reset the serving process prior to the server announcing service. Positions and Restrictions during the Serving Process: Server - After the server announces the score, the server may not step until after they announce service. Server's Teammate - At any point the server's teammate may adjust their position and are free to move. They do not need to return to their position on subsequent service attempts within the same point. They may not enter the service circle until after the ball is struck. The server's teammate is not allowed to cross in front of the receiving team and doing so will result in a loss of point. All hinder rules are in effect (see chapter 6). Serve Receiver - The serve receiver's athletic stance (i.e. shoulder height) is established upon acknowledging readiness. A receiver's athletic stance establishes their shoulder height. An athletic stance is defined by the ability to quickly move laterally and has the components of bent knees (no lower than 90 degrees), feet slightly wider than shoulder distance apart, and chest positioned over feet. If a receiver does not meet the definition of an athletic stance causing a lowered shoulder height, they must be notified before the server announces service. Upon notification, the receiver must correct their stance to an acceptable position. Failure to correct their position will result in a delay of game penalty (see 3.10). Once the receiver has acknowledged readiness they can lower their stance if desired. Serve Receiver's Teammate - At any point the serve receiver's teammate may adjust their position and are free to move. They may not enter the service circle until after the ball is struck. The receiver's teammates' movement must follow an imaginary straight line extending from the center of the court through their starting position. The server is allocated two attempts to hit a legal serve. If the server commits a service fault, only a player on the receiving team has until the ball is hit for a second time, there is a change of possession, or immediately (i.e. within ~3 seconds) after a dead ball to call fault. The server is then allocated a second serve. If a second fault is called, the receiving team is awarded a point. If a fault occurs and then an infraction by the receiving team occurs before the ball is hit for a second time or there is a change of possession, the fault takes precedence over the infraction. The receiving team may choose to play through a fault that is not actively called by an observer. However, players may never play through 4.5.10 – 4.5.13. Unless a call is made by a player or observer, the play is live. The receiving team is not required to say anything if they choose to play through a fault."
        },
        {
          number: "4.5",
          title: "Service faults",
          content: "The ball is struck before traveling 10 cm (4 inches) away from the point of release. After setting the service position or during the act of serving – including the swing, the follow-through, and the momentum from the action – the server makes contact on or within the service line. This includes contacting a player who is on or within the service line. It is a fault even if the ball is declared dead before the server makes contact on or within the service line. The server may only make contact on or within the service line after demonstrating the momentum from the action has stopped and reestablishing bodily control. The ball is caught. The server does not maintain one point of contact with their pivot foot until the ball hits the net. After taking a step, the server does not maintain one point of contact with their non-pivot foot until the ball hits the net. The ball hits the rim or legs directly. Side Pocket – after hitting a side third of the net, relatively parallel to the ball's incoming trajectory, the ball's horizontal trajectory changes towards the opposite side. A ball hitting within the left third of the net and moving right or a ball hitting within the right third of the net and moving left is a pocket. Left or right side of the net is determined relative to a center line parallel to the ball's horizontal entry angle. A ball hitting within the side pocket area and not moving the opposite direction is legal. After hitting the back third of the net, the ball does not move forward. Every part of the ball must land beyond the farthest point of the set relative to the ball's horizontal angle of entry. A ball that exits the back third of the net and moves sideways is legal so long as it never contacts the side sections of the net. Every part of the ball is over the highest point of the receiver's shoulders at any point from when the ball contacts the net to when the ball passes them or is contacted by the receiver, whichever happens first. If, after acknowledging readiness, the receiver lowers their shoulders, the shoulder height will be judged off their prior athletic stance. If, after acknowledging readiness, the receiver raises their shoulders, the shoulder height will be judged off their new position. The ball passes the receiver when it breaks the plane perpendicular to the line between receiver's position and the center of the net. The ball misses the set entirely. The ball contacts the set (legs, rims, net) multiple times. After the ball is served, the first contact is by a player on the serving team (i.e. a player hits their partner with the serve). The ball is released and not struck. Once the ball is released, dropping, catching or swinging at and missing a toss all count as a fault. The server does not toss the ball within three seconds after announcing service. The ball is released and struck with the same hand. Exception - players with physical limitations are excluded from this rule. The ball lands on or within the NHZ lines."
        }
      ]
    },
    {
      number: "5",
      title: "Playing the Ball",
      sections: [
        {
          number: "5.1",
          title: "In Play",
          content: "The ball is in play from the moment the server strikes it until one of the following occur: A serving fault occurs and/or is called by the receiving team or an observer. An infraction occurs and/or is called by any team or an observer."
        },
        {
          number: "5.2",
          title: "Hitting the ball",
          content: "A hit is any contact with the ball by a player. A team is entitled to a maximum of 3 hits alternating between players for returning the ball to the set. Consecutive Contacts - A player may not hit the ball twice consecutively. Exception see rule 5.3.5 and 5.3.6. Simultaneous Contacts - If on the first contact of a possession teammates touch the ball simultaneously it is counted as one hit. Either teammate may take the next hit. After the first touch, simultaneous contacts count as two hits."
        },
        {
          number: "5.3",
          title: "Characteristics of the hit",
          content: "The ball may touch any part of the body. The ball must not be caught. A catch happens when the ball comes to rest on any part of the player. Players may not hit the ball with two hands. Exceptions see rules 5.3.4 and 5.3.5. At the first hit of the team on a possession, the ball may touch various parts of the body, provided that the contacts take place simultaneously. At the first hit of the team on a possession, the ball may contact various parts of one or both players' bodies consecutively, provided that the contacts occur during one action. A player may have consecutive contacts on the same hand (i.e palms to finger) as long as it does not result in a catch and/or throw. These consecutive contacts count as one hit. After the first hit of the team on a possession, a player may hit the ball once more consecutively, if their first hit occurs before the ball begins a downward trajectory. This action will be counted as a second hit. Consecutive contacts as described in 5.3.6 are not allowed on serve receive. Consecutive contacts as described in 5.3.6 cannot result in an immediate hit on the net."
        },
        {
          number: "5.4",
          title: "Infractions in Playing the Ball",
          content: "Four hits - A team hits the ball more than three times before returning it to the set. Non-rebound - The ball is caught. Two-handed hit – A player hits the ball with both hands simultaneously. Exception see rule 5.3.4. Double-contact - A player hits the ball twice in succession or the ball contacts various parts of his/her body in succession. Exception see rule 5.3.5."
        },
        {
          number: "5.5",
          title: "Hits on the net",
          content: "Illegal hits on the net - When the ball is returned to the set, the return results in a loss of point for the hitting team if: The ball contacts any part of the ground. The ball's initial contact with the set hits the rim, legs or underside of the net directly. The ball bounces multiple times on the net or bounces on the net then hits the set on the way down. The ball never exits the net. The ball touches the ground outside the outer boundary without the opposing team touching the ball before it contacts the ground. A ball touching the boundary line is legal. Note - the boundary rule does not apply on the serve. The ball lands on or within the No Hit Zone lines. For mixed play the open/men's No Hit Zone lines will be used as the line the ball must clear. The receiving team returns the serve without using three touches. Pocket - During a rally, any shot that changes the trajectory of the ball due to the ball's proximity to the rim, without contacting the rim (i.e. pocket) is legal. Roll-up - A shot where the ball lands completely on the netting, and subsequently rolls into the rim and then off the net (i.e. roll-up) is legal. Change of Possession - Possession changes once the ball comes off of the netting. Neither team may contact the ball while it is in contact with the net. Other hitting violations. All result in loss of point: A defensive player attempts to play the ball out of turn. An offensive player hits a shot off the net which subsequently hits themselves or their teammate (includes serves). A player is in contact with the ball while the ball is in contact with the net."
        },
        {
          number: "5.6",
          title: "No Hit Zone",
          content: "The 100cm (3.28 feet) from the center of the net is the No Hit Zone. The final hit of all possessions must be initiated outside of this area. It is a loss of point for the hitting team if on the final hit of the possession the hitting player makes contact on or within the No Hit Zone while in the act of hitting. This includes contacting a player who is on or within the No Hit Zone. (i.e. the hitter may not use another player inside the No Hit Zone to reestablish their bodily control.) The act of hitting includes the swing, the follow-through, and the momentum from the action. It is a loss of point if the player's momentum causes the player to contact anything within the No Hit Zone, including another player. If the player is unable to avoid the No Hit Zone due to the proximity of an opponent, the hinder (Chapter 6) by the defender precedes a No Hit Zone violation by the hitter. If neither player on the defending team would have had an opportunity for a return, the hitter's team is awarded the point even if this hinder is unavoidable. It is a loss of point even if the ball is declared dead before the player makes contact within the No Hit Zone. The hitter may only make contact within the No Hit Zone after demonstrating the momentum from the action has stopped and reestablishing bodily control. If equipment inadvertently falls off a player's body and lands in the No Hit Zone, it is not a violation. For example a hat falls off and lands in the No Hit Zone. If a player has touched the No Hit Zone for any reason, that player cannot make the final hit of a possession until both feet have made contact with the playing surface completely outside the No Hit Zone. A player may enter the No Hit Zone at any time except when that player is making the final hit of a possession."
        },
        {
          number: "5.7",
          title: "Contact with the Set",
          content: "Contact with the set by a player (rims, legs, or netting) during a rally results in a Set Contact infraction for the offending player and is a loss of point for that team. This includes contact from equipment that has fallen off a player. If natural movement of the equipment pushes the set into a player, the set contact is not considered a violation and the point should be played out."
        }
      ]
    },
    {
      number: "6",
      title: "Hinders",
      sections: [
        {
          number: "6.1",
          title: "Right of Way",
          content: "The players whose turn it is to play the ball are entitled to freedom from interference by the opponents. The order in which players can legally contact the ball determines who has the right of way. A player that can legally contact the ball before another player has the right of way."
        },
        {
          number: "6.2",
          title: "Avoiding Interference",
          content: "To avoid interference players that are not playing the ball must make every effort to provide the other players with: Unobstructed direct access to the ball after completion of a reasonable followthrough. Freedom to hit the ball with a reasonable swing. To ensure player safety, when a hitter is within their arm's reach of the net, the defensive team may not enter the imaginary cylinder rising from the rim. If they do so, it will result in a point for the hitting team. The opposing team may enter the cylinder after the hitter's follow through is complete. A player's follow-through can contribute to interference for the opponent when it becomes the latter's turn to play the ball. If a player moves in the direction of their hit causing immediate interference a replay may be given (see 6.7)."
        },
        {
          number: "6.3",
          title: "Hinder Definition",
          content: "A hinder occurs if the opponent fails to fulfill any of the requirements of 6.2.1 or 6.2.2, even if the opponent makes every effort to fulfill those requirements."
        },
        {
          number: "6.4",
          title: "Player Choice",
          content: "A player encountering a possible hinder has the choice of continuing to play or of stopping play. A player seeking a replay or point should stop play immediately and say Hinder."
        },
        {
          number: "6.5",
          title: "No Replay or Point",
          content: "A replay or point shall not be allowed if: There was no interference or the interference was so minimal that the player's freedom to get to and play the ball were not affected. Interference occurred but there is no opportunity for a return, giving benefit of the doubt to the hindered player. The player making every effort to get to the ball (short of dangerous physical contact) is a significant factor in determining if they would have an opportunity for a return. In any questionable situation player safety should be the number one priority. The player moved past the point of interference and played on. The player created the interference in moving to the ball by taking an indirect route while the opponent provided direct access. This occurs when the opponent clearly provides a direct access but the player takes an indirect route. This is different from a situation in which a player, in attempting to recover from a position of disadvantage, does not have direct access to the ball. In this situation the player anticipates the opponent hitting the ball one way, starts moving that way, but having guessed wrongly, changes direction to find the opponent in the way. If the player sufficiently demonstrates that they would have had a good touch then 6.6 - 6.7 will determine the outcome of the hinder."
        },
        {
          number: "6.6",
          title: "Point Awarded",
          content: "The hindered team will receive a point if there was interference, which the opponent did not make every effort to avoid, and the player would have had an opportunity for a return."
        },
        {
          number: "6.7",
          title: "Replay Awarded",
          content: "The hindered team will get a replay if there was interference, which the opponent made every effort to avoid, and the player would have had an opportunity for a return. Any faults reset."
        }
      ]
    },
    {
      number: "7",
      title: "Participant Conduct",
      sections: [
        {
          number: "7.1",
          title: "Sportsmanlike Conduct",
          content: "Participants must know the Official IRF rules and abide by them. Participants must play with integrity. The responsibility of fair play is first and foremost on the players. If a participant knows that they committed any sort of violation, it is their obligation to call it immediately (exception 4.5.2.1). Participants must accept observers' decisions with sportsmanlike conduct, without disputing them. In case of doubt or confusion, clarification may be requested. Participants must refrain from actions or attitudes aimed at influencing the decisions of the observers. Participants must abide by timing regulations. See delay of game in 3.10 and 3.11."
        },
        {
          number: "7.2",
          title: "Fair Play",
          content: "Participants must behave respectfully and courteously in the spirit of fair play, not only towards the observers, but to opponents, partners, spectators, or tournament personnel."
        },
        {
          number: "7.3",
          title: "Misconduct",
          content: "Inappropriate conduct by a player towards observers, opponents, partners, spectators, or tournament personnel is classified in three categories according to the seriousness of the offense. Rude conduct - Action contrary to good manners or moral principles. Offensive conduct - Defamatory or insulting words or gestures or any action expressing contempt. Aggression - Actual physical attack or aggressive or threatening behavior."
        },
        {
          number: "7.4",
          title: "Misconduct Sanction Scale",
          content: "Warning - The first rude conduct of the match by a player is sanctioned with a warning by the observer or tournament director. Penalty - The second rude conduct of the same match by the same player is penalized with a point awarded by the observer or tournament director. The first offensive conduct of the match by a player is penalized with a point awarded by the observer or tournament director. Disqualification - The third rude conduct of the same match by the same player is sanctioned by tournament disqualification by the observer or tournament director. The second offensive conduct of the match by a player is sanctioned by tournament disqualification by the observer or tournament director. The first physical attack or implied or threatened aggression is sanctioned by tournament disqualification by the observer or tournament director."
        },
        {
          number: "7.5",
          title: "Misconduct before and between games/matches",
          content: "Any misconduct occurring before, between, or after games/matches are sanctioned according to rule 7.4 and sanctions apply in the following games. If not observed by a tournament official, this misconduct should be reported to the tournament director. Once a player receives a penalty, they will no longer get warnings in subsequent matches for that event. Sanctions will start at the penalty level."
        }
      ]
    },
    {
      number: "8",
      title: "Making Calls and Settling Disagreements",
      sections: [
        {
          number: "8.1",
          title: "Calling Service Faults",
          content: "See 4.5.2.1."
        },
        {
          number: "8.2",
          title: "Hitting and Play Infractions",
          content: "Hitting infractions (like a direct rim hit) or play infractions (like contact with the set) must be called immediately after occurrence by saying violation and stopping play."
        },
        {
          number: "8.3",
          title: "Calling Hinder",
          content: "Hinders must be called immediately after occurrence by saying hinder or violation and stopping play."
        },
        {
          number: "8.4",
          title: "Disagreements",
          content: "If teams cannot determine the legality of a hit, serve, or call (when observers are not present), they must replay the point. Teammates do not have to agree with each other for that team to issue a disagreement. If three players think one thing and the fourth player still disagrees after discussion this merits replaying the point."
        }
      ]
    }
  ]
};
