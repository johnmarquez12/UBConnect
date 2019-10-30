var data = [
" The frequency response of a causal continuous-time\
                                                    \
 LTI system is given by H(ω)=jω+524−ω2+10jω, where the input signal to the system is x(t) and the output is y(t).",
"A system is described by the differential equation ddty(t)+9y(t)=2ddtx(t)+x(t), where x(t) is the input and y(t) is the output of the system.In your answers below, enter D(t) instead of δ(t), and “w” for ω. a) Find the frequency response of the system, H(ω).",
"Find the Fourier transform X1(ω), X2(ω), and X3(ω) of the signals x1(t), x2(t), and x3(t), using the Fourier transform pair x(t)=u(t+1)−u(t−1)⟷X(ω)=2sinc(ω). Then select the Fourier transform property you used for each signal, from the corresponding drop-down menu.",
"Consider a contintuous-time LTI system for which the response to the input x(t)=[e−2t+e−3t]u(t) is given by y(t)=[5e−2t−5e−5t]u(t). a) Find the frequency response, H(ω), of the system.",
"In the circuit shown in the figure, the input is the voltage source, v(t), and the output is the voltange vc(t) across the capacitor. Determine the transfer function, H(s), the impulse response h(t), and the step response d(t), of this circuit. Assume R1=2 kΩ, R2=2 kΩ and C=7 mF.",
"Given that the Laplace transform of the output is Y(s)=(s+4)(1−e−5s)2s(s+2)2, a) Find the transfer function of the system and the region of convergence for σ=Re(s).",
"In the circuit shown in the figure below, the switch has been in a closed position for a long time before it is opened at t=0. Find the inductor’s current, i(t), for t>0 if R1=2 Ω, R2=5 Ω, Vi=11, C=177 F, and L=110 H."
]



// var re1 = new RegExp(" \s\s+","gi");
// var re2 = new RegExp('\\b' + "the" + '\\b',"gi");
// var re3 = new RegExp('\\b' + "a" + '\\b',"gi");
// var re4 = new RegExp('\\b' + "an" + '\\b',"gi");
// var re5 = new RegExp('\\b' + "to" + '\\b',"gi");
// var re6 = new RegExp('\\b' + "by" + '\\b',"gi");
// var re7 = new RegExp('\\b' + "for" + '\\b',"gi");
// var re8 = new RegExp('\\b' + "in" + '\\b',"gi");
// var re9 = new RegExp('\\b' + "and" + '\\b',"gi");
// var re10 = new RegExp('\\b' + "when" + '\\b',"gi");
// var re11 = new RegExp('\\b' + "where" + '\\b',"gi");
// var re12 = new RegExp('\\b' + "what" + '\\b',"gi");
// var re13 = new RegExp('\\b' + "how" + '\\b',"gi");
// var re14 = new RegExp('\\b' + "why" + '\\b',"gi");
// var re15 = new RegExp('\\b' + "is" + '\\b',"gi");
// var re16 = new RegExp('\\b' + "are" + '\\b',"gi");
// var re17 = new RegExp("[, ]+","gi");
// var re18 = new RegExp("[0-9]","gi");
// var re19 = new RegExp("[=+*\/-]","gi");
// var re20 = new RegExp('\\b' + "or" + '\\b',"gi");
// var re21 = new RegExp('\\b' + "of" + '\\b',"gi");


// data[0] = data[0].replace(re1,"");
// data[0] = data[0].replace(re2,"");
// data[0] = data[0].replace(re3,"");
// data[0] = data[0].replace(re4,"");
// data[0] = data[0].replace(re5,"");
// data[0] = data[0].replace(re6,"");
// data[0] = data[0].replace(re7,"");
// data[0] = data[0].replace(re8,"");
// data[0] = data[0].replace(re9,"");
// data[0] = data[0].replace(re10,"");
// data[0] = data[0].replace(re11,"");
// data[0] = data[0].replace(re12,"");
// data[0] = data[0].replace(re13,"");
// data[0] = data[0].replace(re14,"");
// data[0] = data[0].replace(re15,"");
// data[0] = data[0].replace(re16,"");
// data[0] = data[0].replace(re1,"");
// data[0] = data[0].replace(re19," ");
// data[0] = data[0].replace(re20,"");
// data[0] = data[0].replace(re21,"");
// data[0] = data[0].replace(re18,",");
// data[0] = data[0].replace(re17,",");
// data[0] = data[0].replace(" ",",");
// data[0] = data[0].split(',').filter(function(item,i,allItems){
//     return i==allItems.indexOf(item);
// }).join(',');




// data[0] = data[0].replace(re2,"");
// console.log(data[0]);

const keywords = (string) => {
    var regexes = [
        new RegExp(" \s\s+","gi"),
        new RegExp('\\b' + "the" + '\\b',"gi"),
        new RegExp('\\b' + "a" + '\\b',"gi"),
        new RegExp('\\b' + "an" + '\\b',"gi"),
        new RegExp('\\b' + "to" + '\\b',"gi"),
        new RegExp('\\b' + "by" + '\\b',"gi"),
        new RegExp('\\b' + "for" + '\\b',"gi"),
        new RegExp('\\b' + "in" + '\\b',"gi"),
        new RegExp('\\b' + "and" + '\\b',"gi"),
        new RegExp('\\b' + "when" + '\\b',"gi"),
        new RegExp('\\b' + "where" + '\\b',"gi"),
        new RegExp('\\b' + "what" + '\\b',"gi"),
        new RegExp('\\b' + "how" + '\\b',"gi"),
        new RegExp('\\b' + "why" + '\\b',"gi"),
        new RegExp('\\b' + "is" + '\\b',"gi"),
        new RegExp('\\b' + "are" + '\\b',"gi"),
        new RegExp(" \s\s+","gi"),
        new RegExp("[=+*\/-]","gi"),
        new RegExp('\\b' + "or" + '\\b',"gi"),
        new RegExp('\\b' + "of" + '\\b',"gi"),
        new RegExp("[0-9]","gi"),
        new RegExp("[, ]+","gi")
    ]

    for(i in regexes){
        if(i>16 || i<20){
            string = string.replace(regexes[i]," ");
        }
        else if(i>=20){
            string = string.replace(regexes[i],",")
        }
        string = string.replace(regexes[i]," ")
    }

    string = string.replace(new RegExp(" ","gi"),",")

    string = string.split(',').filter(function(item,j,allItems){
        return j==allItems.indexOf(item);
    }).join(',');


}

keywords(data[0]);