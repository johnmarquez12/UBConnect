
const getCosineSimilarity = (v1, v2) => {

    let sumxx = 0; let sumyy = 0; let sumxy = 0;
    if(v1.length < v2.length) {
        let i;
        for (i of v1) {
            let x = v1[i]; 
            let y = v2[i];
            sumxx += x*x;
            sumyy += y*y;
            sumxy += x*y;
        }
            
    } else {
        let i;
        for(i of v2) {
            let x = v1[i]; 
            let y = v2[i];
            sumxx += x*x;
            sumyy += y*y;
            sumxy += x*y;
        }

    }
    return sumxy/Math.sqrt(sumxx*sumyy);
};

const getBagOfQuestions = (questionKeywords, question) => {
    const bagOfQuestions = [];

    for (let i = 0; i < questionKeywords.size; i++) {
    
        const cosineSimilarity = getCosineSimilarity(question, questionKeywords[i]);
        if (cosineSimilarity > 0.4) {
            bagOfQuestions.push(questionKeywords[i]);
        }
        if (bagOfQuestions > 4) {
            return bagOfQuestions;
        }
    }
};

module.exports = getBagOfQuestions;
