// A lighthearted conversation quiz. No answers leave the browser.
export const types = ['talk','pause','write','walk'];
export const questions = [
{ko:'마음에 걸리는 일이 생겼어요.\n나는 어떻게 이야기를 시작하나요?',ja:'ちょっと気になることができた。\nどうやって話し始めたい？',en:'Something is on your mind.\nHow would you like to start?',
koA:['지금 잠깐 이야기할 수 있는지 물어봐요','생각을 정리하고 이야기할 시간을 정해요','전하고 싶은 말을 짧게 적어봐요','함께 걸으며 자연스럽게 꺼내요'],
jaA:['今、少し話せるか聞く','少し整理してから、話す時間を決める','伝えたいことを短く書いてみる','一緒に歩きながら、自然に切り出す'],
enA:['Ask if now is a good time to talk','Gather my thoughts and agree on a time','Write down a few things I want to say','Bring it up gently while we walk together']},
{ko:'“무슨 생각 해?”라는 질문에\n가장 편한 대답은?',ja:'「何を考えてるの？」と聞かれたら、\n言いやすいのは？',en:'“What’s on your mind?”\nWhich reply feels easiest?',
koA:['“아직 정리는 안 됐는데, 말해봐도 돼?”','“조금만 생각하고 얘기해도 될까?”','“말로는 어려워서, 적어서 보여줄게.”','“같이 바람 쐬면서 얘기할까?”'],
jaA:['「まだまとまってないけど、話してもいい？」','「少し考えてから話してもいい？」','「言葉にしづらいから、書いて見せるね。」','「少し外を歩きながら話さない？」'],
enA:['“It’s still a bit jumbled. Can I talk it through?”','“Could I think for a moment and come back to it?”','“It’s hard to say aloud. Can I write it down?”','“Shall we get some fresh air and talk?”']},
{ko:'내 말을 조금 다르게 이해한 것 같아요.\n나는 어떻게 풀고 싶나요?',ja:'思っていたのと少し違う意味で\n伝わったみたい。どうしたい？',en:'Your words landed a little differently\nthan you meant. What helps?',
koA:['서로 들은 뜻을 바로 확인해봐요','잠깐 쉬고 차분해졌을 때 다시 말해요','내가 뜻한 내용을 한두 문장으로 적어요','편한 자리에 나란히 앉아 다시 이야기해요'],
jaA:['お互いにどう受け取ったか、その場で確かめる','少し休んで、落ち着いてから話し直す','伝えたかったことを一、二文にして書く','落ち着く場所で並んで座って、もう一度話す'],
enA:['Check what each of us understood right away','Take a short break and talk when we feel calmer','Write one or two sentences about what I meant','Sit side by side somewhere comfortable and try again']},
{ko:'조금 진지한 대화를 할 때,\n도움이 되는 것은?',ja:'少し真剣な話をするとき、\nあると助かるのは？',en:'For a slightly serious conversation,\nwhat makes it easier?',
koA:['서로 한 번씩 말을 마칠 수 있는 시간','혼자 생각할 수 있는 짧은 여유','빠뜨리지 않게 적어둔 작은 메모','눈을 계속 마주치지 않아도 되는 편한 자리'],
jaA:['ひとりずつ、最後まで話せる時間','ひとりで考えるための、少しの余裕','言い忘れないための小さなメモ','ずっと目を合わせなくてもいい、落ち着く場所'],
enA:['Room for each of us to finish our thoughts','A little time to think on my own first','A small note so I don’t lose my words','A comfortable spot without constant eye contact']},
{ko:'오늘 기분이 어떤지\n자연스럽게 나누고 싶어요.',ja:'今日の気分を、\n気負わずに伝えたい。',en:'You’d like to share how your day felt.\nWhat comes naturally?',
koA:['하루 이야기를 주고받으며 마음도 꺼내요','혼자 하루를 돌아본 뒤 이야기해요','짧은 메시지나 일기로 먼저 전해요','같이 산책하거나 차를 마시며 나눠요'],
jaA:['一日の話をしながら、気持ちも伝える','ひとりで振り返ってから話す','短いメッセージや日記で、まず伝える','散歩やお茶の時間に、少しずつ話す'],
enA:['Trade stories and share my feelings as we go','Reflect on my day first, then talk','Start with a short message or journal note','Share little by little over a walk or a cup of tea']},
{ko:'상대가 “천천히 말해도 돼”라고 해요.\n그다음 나는?',ja:'「ゆっくり話していいよ」と言われたら、\nそのあと、どうしたい？',en:'“Take your time,” they say.\nWhat would you like to do next?',
koA:['생각나는 것부터 조금씩 말해봐요','잠깐 정리한 뒤 돌아올 시간을 알려줘요','중요한 말부터 적어 보여줘요','옆에 앉아 잠깐 쉬다가 이야기를 꺼내요'],
jaA:['思いつくことから、少しずつ話す','少し整理して、いつ戻るか伝える','大事なことから書いて見せる','隣で少し休んでから、話し始める'],
enA:['Start with whatever words come to mind','Take a breather and say when I’ll come back','Write down the most important part first','Settle in beside them, then start when I’m ready']},
{ko:'꺼내기 어려운 부탁이 있어요.\n나에게 편한 방법은?',ja:'ちょっと言い出しにくいお願いがある。\n伝えやすい方法は？',en:'There’s something you’d like to ask for,\nbut it feels hard to say. What helps?',
koA:['“이렇게 해주면 좋겠어”라고 직접 말해요','무엇을 원하는지 정리하고 시간을 잡아요','내 마음과 부탁을 글로 차근차근 전해요','편한 시간을 함께 보내다 조심스럽게 말해요'],
jaA:['「こうしてもらえるとうれしい」と直接伝える','何を望んでいるか整理して、話す時間を決める','気持ちとお願いを、文章で順に伝える','一緒にゆっくり過ごしてから、そっと伝える'],
enA:['Say directly, “It would help me if…”','Work out what I need and make time to talk','Put my feelings and request into a thoughtful note','Ease into it after some relaxed time together']},
{ko:'“이제 내 마음이 좀 전해졌어.”\n그렇게 느끼는 순간은?',ja:'「少し、気持ちが伝わったな」\nそう感じるのは？',en:'“I feel a little more understood.”\nWhen does that happen for you?',
koA:['서로 질문하며 충분히 이야기했을 때','내 속도로 생각하고 끝까지 말했을 때','고른 문장을 상대가 찬찬히 읽어줬을 때','편안한 분위기에서 서두르지 않고 나눴을 때'],
jaA:['お互いに質問しながら、十分に話せたとき','自分のペースで考えて、最後まで話せたとき','選んだ言葉を、相手が丁寧に読んでくれたとき','落ち着いた雰囲気で、急がずに話せたとき'],
enA:['After we’ve talked things through and asked questions','After I’ve had time to think and finish in my own way','When they read my carefully chosen words with care','When we’ve shared an unhurried moment together']}
];
export const profiles = {
talk:{image:'listen',
ko:{name:'말하며 정리하는 수달',short:'대화를 나누다 보면 내 마음도 선명해져요',body:'완벽한 문장을 준비하기보다 이야기하면서 생각을 정리하는 편이에요. 상대의 질문과 반응이 내 마음을 알아차리는 데 도움이 될 수 있어요. 먼저 지금 이야기할 여유가 있는지 물으면 둘 다 편하게 시작할 수 있어요.',request:'“아직 생각이 덜 정리됐는데, 잠깐 들어줄 수 있어? 지금 어렵다면 편한 시간을 알려줘.”',tips:['결론이 나지 않은 말도 끊지 않고 들어주기','추측하기보다 “이런 뜻이야?” 하고 확인해주기','서로 말할 시간과 쉴 시간을 함께 정하기']},
ja:{name:'話しながら整理するラッコ',short:'話すうちに、自分の気持ちも見えてくる',body:'完璧な言葉を用意するより、話しながら考えを整理するほうが楽なタイプ。相手の質問や反応で、気持ちに気づくこともありそうです。まず今話せるか聞くと、お互いに無理なく始められます。',request:'「まだ考えがまとまってないけど、少し聞いてもらえる？ 今が難しければ、話せる時間を教えてね。」',tips:['まだ結論のない話も、遮らずに聞いてくれる','決めつけず「こういう意味？」と確かめてくれる','話す時間も休む時間も、一緒に決めてくれる']},
en:{name:'The talk-it-through otter',short:'Talking helps me understand my own feelings',body:'You may find your words as you talk, rather than having a perfect sentence ready. A gentle question or response can help you notice what you feel. Checking whether now is a good time makes room for both of you.',request:'“My thoughts are still a bit jumbled. Could you listen for a moment? If now isn’t good, when would work for you?”',tips:['Letting me finish even before I have a conclusion','Checking what I mean instead of guessing','Making room for both speaking and taking a break']}},
pause:{image:'quiet',
ko:{name:'한숨 돌리고 말하는 수달',short:'잠깐의 여유가 내 말을 다정하게 만들어요',body:'생각과 감정이 한꺼번에 몰리면 잠시 정리한 뒤 말하는 게 편할 수 있어요. 쉬는 시간이 필요하다는 뜻이지, 대화를 끝내겠다는 뜻은 아니에요. 다시 이야기할 시간을 함께 정해두면 기다리는 상대도 안심하기 쉬워요.',request:'“네 이야기를 잘 듣고 싶어서 잠깐 정리할 시간이 필요해. 20분 쉬고 다시 얘기해도 괜찮을까?”',tips:['쉬는 시간을 거절로 단정하지 않기','다시 이야기할 시간을 함께 정해주기','약속한 시간에 부담 없이 대화를 이어주기']},
ja:{name:'ひと息ついてから話すラッコ',short:'少しの余裕で、言葉がやさしくなる',body:'考えや気持ちが一度に押し寄せると、少し整理してから話すほうが楽かもしれません。休憩は、話を終わらせたいという意味とは限りません。再開する時間を一緒に決めておくと、待つ相手も安心しやすくなります。',request:'「ちゃんと話を聞きたいから、少し整理する時間がほしいな。20分休んでから、また話してもいい？」',tips:['休憩がほしい気持ちを、拒絶と決めつけない','また話す時間を、一緒に決めてくれる','約束した時間に、穏やかに話を再開してくれる']},
en:{name:'The pause-then-talk otter',short:'A little breathing room helps me find kinder words',body:'When thoughts and feelings arrive all at once, you may prefer a moment to gather them before speaking. A break doesn’t have to mean ending the conversation. Agreeing on a time to return can help the other person feel reassured, too.',request:'“I want to listen properly, and I need a moment to settle my thoughts. Could we take 20 minutes and then come back to this?”',tips:['Not treating a request for a pause as rejection','Agreeing together on when to return','Picking up the conversation gently at the time we chose']}},
write:{image:'solve',
ko:{name:'글로 마음을 여는 수달',short:'문장을 고르면 전하고 싶은 마음이 보여요',body:'말이 빨리 나오지 않을 때 글로 써보면 중요한 마음을 찾기 쉬운 편이에요. 메시지는 대화를 여는 작은 문이 될 수 있어요. 글만으로 뜻이 달라 보이면 서로 추측하지 말고 짧게 확인해보세요.',request:'“말로 하면 빠뜨릴 것 같아서 먼저 적어봤어. 편할 때 읽어주고, 어떤 뜻으로 들렸는지 같이 얘기해줄래?”',tips:['바로 답을 재촉하지 않고 읽을 시간 주기','문장의 말투만으로 마음을 단정하지 않기','필요하면 통화나 대화로 뜻을 함께 확인하기']},
ja:{name:'書いて気持ちを伝えるラッコ',short:'言葉を選ぶと、伝えたい気持ちが見えてくる',body:'すぐに言葉が出ないとき、書いてみると大切な気持ちを見つけやすいタイプ。メッセージは、会話を始める小さなきっかけになります。文章だけで伝わりにくいときは、想像で決めずに確かめ合ってみて。',request:'「口で話すと言い忘れそうだから、先に書いてみたよ。時間があるときに読んで、どう伝わったか一緒に話せる？」',tips:['すぐの返事を求めず、読む時間をくれる','文面の調子だけで、気持ちを決めつけない','必要なら、電話や会話で意味を確かめ合う']},
en:{name:'The put-it-in-words otter',short:'Choosing my words helps me share what matters',body:'When speaking feels difficult, writing may help you find the part you most want to express. A message can open a conversation. If the tone feels unclear on the page, checking together is kinder than guessing.',request:'“I wrote this down because I might miss something out loud. Could you read it when you have time, and then we can talk about how it came across?”',tips:['Giving me time to write, and themselves time to read','Not deciding how I feel from a message’s tone alone','Checking the meaning together by voice or in person when helpful']}},
walk:{image:'hug',
ko:{name:'나란히 마음을 여는 수달',short:'편안한 시간을 함께 보내면 말문이 열려요',body:'정면으로 마주 앉은 진지한 자리보다 나란히 걷거나 차를 마실 때 말이 편해질 수 있어요. 따뜻한 분위기가 대화를 시작하는 데 도움이 돼요. 중요한 이야기는 소음이 적고 둘 다 편안한 장소를 함께 골라보세요.',request:'“이야기하고 싶은 게 있는데, 잠깐 같이 걸을래? 걷기 어렵다면 조용한 곳에 나란히 앉아도 좋아.”',tips:['편안한 장소와 방식을 함께 골라주기','침묵이 생겨도 말을 재촉하지 않기','걷거나 다른 일을 하더라도 중요한 말에는 귀 기울이기']},
ja:{name:'並んで心を開くラッコ',short:'落ち着く時間を一緒に過ごすと、話しやすい',body:'正面から向き合うより、並んで歩いたりお茶を飲んだりすると話しやすいかもしれません。やわらかな雰囲気が、会話のきっかけになりそうです。大事な話なら、静かでふたりとも落ち着ける場所を選んでみて。',request:'「話したいことがあるんだけど、少し一緒に歩かない？ 難しければ、静かなところで並んで座るのもいいな。」',tips:['落ち着ける場所や話し方を、一緒に選ぶ','沈黙があっても、言葉を急かさない','歩いているときも、大事な話には耳を傾ける']},
en:{name:'The side-by-side otter',short:'A relaxed moment together helps my words come',body:'You may find it easier to talk while sitting beside someone, sharing tea, or taking a walk. A gentle setting can help you begin. For something important, choose a quiet place where both of you feel comfortable.',request:'“There’s something I’d like to talk about. Shall we take a little walk? Sitting somewhere quiet together would be lovely, too.”',tips:['Choosing a comfortable place and way to talk together','Allowing a little silence without rushing me','Paying attention to important words, even while we walk or do something else']}}
};
export const copy = {
ko:{start:'내 대화 리듬 알아보기',finish:'내 대화 리듬 보기',featured:'우리의 대화 놀이',resultLabel:'오늘, 마음을 전하는 나의 리듬',mixed:'여러 리듬으로\n마음을 여는 수달',mixedBody:'같은 수의 답이 나왔어요. 상황과 상대에 따라 편한 방법이 달라질 수 있어요. 오늘 써보고 싶은 방법을 골라보세요.',about:'내 마음이 열리는 방식',try:'이렇게 대화하면 편안해요',share:'내 대화 리듬 나누기',shareTitle:'우리의 대화 속도는? · 어스모리',shared:'친구가 나눠준 대화 리듬',sharedBody:'이 카드는 공유된 결과예요. 상대의 마음을 단정하지 말고, 오늘 편한 대화 방법을 서로 물어봐요.'},
ja:{start:'わたしの会話リズムを探す',finish:'会話リズムを見る',featured:'ふたりの会話あそび',resultLabel:'今日の気持ちを伝える、わたしのリズム',mixed:'いろんなリズムで\n心を開くラッコ',mixedBody:'同じ数の答えがありました。状況や相手によって、話しやすい方法は変わるもの。今日試したい方法を選んでみて。',about:'わたしが話しやすいのは',try:'こんな話し方だと安心します',share:'会話リズムをシェア',shareTitle:'ふたりの会話のペースは？ · Usmori',shared:'シェアされた会話リズム',sharedBody:'これは共有された結果です。相手の気持ちを決めつけず、今日はどう話したいか、お互いに聞いてみてね。'},
en:{start:'Find my conversation rhythm',finish:'See my conversation rhythm',featured:'A little conversation quiz',resultLabel:'My rhythm for sharing what’s on my heart',mixed:'An otter with\nmore than one rhythm',mixedBody:'A few answers tied. Different moments and people may call for different ways to talk. Choose one you’d like to try today.',about:'How I find my words',try:'Ways to make talking feel easier',share:'Share my conversation rhythm',shareTitle:'What’s our conversation pace? · Usmori',shared:'Someone shared their conversation rhythm',sharedBody:'This is a shared result. Instead of assuming how someone feels, ask each other what would make talking easier today.'}
};
