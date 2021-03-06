var en_sentences = [
   ["John ate an apple before afternoon",
    "before afternoon John ate an apple",
    "John before afternoon ate an apple"],
   ["some students like to study in the night",
    "at night some students like to study"],
   ["John and Mary went to church",
    "Mary and John went to church"],
   ["John went to church after eating",
    "after eating John went to church",
    "John after eating went to church"],
   ["did he go to market",
    "he did go to market"],
   ["the woman who called my sister sells cosmetics",
    "the woman who sells cosmetics called my sister",
    "my sister who sells cosmetics called the woman",
    "my sister who called the woman sells cosmetics"],
   ["John goes to the library and studies",
    "John studies and goes to the library"],
   ["John ate an apple so did she",
    "she ate an apple so did John"],
   ["the teacher returned the book after she noticed the error",
    "the teacher noticed the error after she returned the book",
    "after the teacher returned the book she noticed the error",
    "after the teacher noticed the error she returned the book",
    "she returned the book after the teacher noticed the error",
    "she noticed the error after the teacher returned the book",
    "after she returned the book the teacher noticed the error",
    "after she noticed the error the teacher returned the book"],
   ["I told her that I bought a book yesterday",
    "I told her yesterday that I bought a book",
    "yesterday I told her that I bought a book",
    "I bought a book that I told her yesterday",
    "I bought a book yesterday that I told her",
    "yesterday I bought a book that I told her"]
  ];

var hn_sentences= [
   ["राम और श्याम बाजार गयें",
    "राम और श्याम गयें बाजार",
    "बाजार गयें राम और श्याम",
    "गयें बाजार राम और श्याम"],
   ["राम सोया और श्याम भी",
    "श्याम सोया और राम भी",
    "सोया श्याम और राम भी",
    "सोया राम और श्याम भी"],
   ["मैंने उसे बताया कि राम सो रहा है",
    "मैंने उसे बताया कि सो रहा है राम",
    "उसे मैंने बताया कि राम सो रहा है",
    "उसे मैंने बताया कि सो रहा है राम",
    "मैंने बताया उसे कि राम सो रहा है",
    "मैंने बताया उसे कि सो रहा है राम",
    "उसे बताया मैंने कि राम सो रहा है",
    "उसे बताया मैंने कि सो रहा है राम",
    "बताया मैंने उसे कि राम सो रहा है",
    "बताया मैंने उसे कि सो रहा है राम",
    "बताया उसे मैंने कि राम सो रहा है",
    "बताया उसे मैंने कि सो रहा है राम"],
   ["राम खाकर सोया",
    "खाकर राम सोया",
    "राम सोया खाकर",
    "खाकर सोया राम",
    "सोया राम खाकर",
    "सोया खाकर राम"],
   ["बिल्लियों को मारकर कुत्ता सो गया",
    "मारकर बिल्लियों को कुत्ता सो गया",
    "बिल्लियों को मारकर सो गया कुत्ता",
    "मारकर बिल्लियों को सो गया कुत्ता",
    "कुत्ता सो गया बिल्लियों को मारकर",
    "कुत्ता सो गया मारकर बिल्लियों को",
    "सो गया कुत्ता बिल्लियों को मारकर",
    "सो गया कुत्ता मारकर बिल्लियों को"],
   ["एक लाल किताब वहाँ है",
    "एक लाल किताब है वहाँ",
    "वहाँ है एक लाल किताब",
    "है वहाँ एक लाल किताब"],
   ["एक बड़ी सी किताब वहाँ है",
    "एक बड़ी सी किताब है वहाँ",
    "बड़ी सी एक किताब वहाँ है",
    "बड़ी सी एक किताब है वहाँ",
    "वहाँ है एक बड़ी सी किताब",
    "वहाँ है बड़ी सी एक किताब",
    "है वहाँ एक बड़ी सी किताब",
    "है वहाँ बड़ी सी एक किताब"],
  ];

$(document).ready( function(){
   $("#info").hide();
})

var sent_num;
var sent_lang;

$("#gen_english").click(function(){
   if(sent_lang=="eng")
      {
          return false;
      }
   $("#answers").show();
   $("#answer").hide();
   $("#hide_answer").hide();
   $("#correct_answer").hide();
   $("#wrong_answer").hide();
   $("#answers").empty();
   $("#correctness").hide();
   $("#formed_sentence").hide();
   $("#sentence").text("");
   sent_lang="eng";
   $("#buttons").empty();
   $("#info").show();
   sent_num=gen_english();
   get_sentence("eng",sent_num);
})

$("#gen_hindi").click(function(){
   if(sent_lang=="hin")
      {
          return false;
      }
   $("#answers").show();
   $("#answer").hide();
   $("#hide_answer").hide();
   $("#correct_answer").hide();
   $("#wrong_answer").hide();
   $("#answers").empty();
   $("#correctness").hide();
   $("#formed_sentence").hide();
   $("#sentence").text("");
   sent_lang="hin";
   $("#buttons").empty();
   $("#info").show();
   sent_num=gen_hindi();
   get_sentence("hin",sent_num);
})

function gen_english(){
   let num = Math.floor(Math.random()*en_sentences.length)
   return num;
}

function gen_hindi(){
   let num = Math.floor(Math.random()*hn_sentences.length)
   return num;
}

function get_sentence(lang,number){
   if(lang=="eng"){
      let sentence = en_sentences[number][0].split(" ");
      gen_sentence(sentence);
   }

   else{
      let sentence = hn_sentences[number][0].split(" ");
      gen_sentence(sentence);
   }
}

function gen_sentence(sentence){
      for(let i=0;i<sentence.length;i++)
      {
          let num = Math.floor(Math.random()*(sentence.length));
          for(let j=num;;j--)
          {
              if(j<0)
                 {                     
                    j=sentence.length-1;
                 }
              if(sentence[j]!=" ")
                 {
                     num=j;
                     break;
                  }
               
           }
          let button='<button type="button" class="btn btn-outline-success m-1 jumble">' + sentence[num] + '</button>';
          $("#buttons").append(button);
          sentence[num]=" ";
       }
   $(".jumble").click(show_word);
}

function show_word(){
   $("#formed_sentence").show();
   $(this).hide();
   if($("#buttons").height()==0)
      {
        $("#correctness").show();
        $("#get_answers").show();
        $("#sentence").text($("#sentence").text()+$(this).text());
    }
    else{
        $("#sentence").text($("#sentence").text()+$(this).text()+" ");
     }
}

$("#reform").click(function(){
   $("#correct_answer").hide();
   $("#wrong_answer").hide();
   $("#answers").empty();
   $("#answers").show();
   $(".jumble").show();
   $("#sentence").text("");
   $("#formed_sentence").hide();
   $("#correctness").hide();
   $("#answer").hide();
   $("#hide_answer").hide();   
})

$("#correctness").click(function(){
   if(sent_lang=="eng")
    {
        for (let i=0;i<en_sentences[sent_num].length;i++)
          {
              if($("#sentence").text()==en_sentences[sent_num][i])
                 {
                     $("#correct_answer").show();
                     return true;
                  }
            }
     }
    else{
        for (let i=0;i<hn_sentences[sent_num].length;i++)
          {
              if($("#sentence").text()==hn_sentences[sent_num][i])
                 {
                     $("#correct_answer").show();
                     return true;
                  }
            }
     }
     $("#wrong_answer").show();
})

$("#get_answers").click(function(){
   if(sent_lang=="eng")
    {
        for (let i=0;i<en_sentences[sent_num].length;i++)
          {
              $("#answers").append('<div class="text-center m-1">' + en_sentences[sent_num][i] + '</div>');
            }
     }
    else{
        for (let i=0;i<hn_sentences[sent_num].length;i++)
          {
              $("#answers").append('<div class="text-center m-1">' + hn_sentences[sent_num][i] + '</div>'); 
            }
     }
    $("#get_answers").hide();
    $("#hide_answer").show();
})

$("#hide_answer").click(toggle);
$("#answer").click(toggle);

function toggle(){
   $("#answers").toggle();
   $("#hide_answer").toggle();
   $("#answer").toggle();
}


