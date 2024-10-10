function MainTodayResult(){
    return(
        <>
            <h2></h2>
            <div>
                <ul>
                    <li>순위</li>
                    <li>팀명</li>
                    <li>경기</li>
                    <li>승</li>
                    <li>패</li>
                    <li>무</li>
                    <li>승률</li>
                    <li>게임차</li>
                    <li>연속</li>
                </ul>    
                <ul>/* 여기가 반복 */
                    <li>
                        <ul>
                            <li>1</li>
                            <li><a>KIA</a></li>
                            <li>143</li>
                            <li>86</li>
                            <li>55</li>
                            <li>2</li>
                            <li>0.610</li>
                            <li>-</li>
                            <li>1승</li>
                        </ul>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default MainTodayResult;
