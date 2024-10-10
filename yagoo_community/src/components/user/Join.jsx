function JoinInput(){
    return(
        <>
            <div>
                <h2>로고</h2>
                <h3>회원가입</h3>
                <form>
                    <p>아이디</p>
                    <input type="text" placeholder="4~15자 이내로 입력해주세요"></input>
                    <p>비밀번호</p>
                    <input type="passward" placeholder="최소 10자 이상 입력해주세요"></input>
                    <p>이메일</p>
                    <input type="email" placeholder="admin@yagoo.com"></input>
                    <p>이름</p>
                    <input type="text" placeholder="홍길동"></input>
                    <p>닉네임</p>
                    <input type="text" placeholder="15자 이하로 입력해주세요"></input>
                    <p>응원팀</p>
                    <select name="응원팀 선택">
                        <option value='KIA'>KIA</option>
                        <option value='두산'>두산</option>
                        <option value='롯데'>롯데</option>
                        <option value='삼성'>삼성</option>
                        <option value='SSG'>SSG</option>
                        <option value='NC'>NC</option>
                        <option value='LG'>LG</option>
                        <option value='KT'>KT</option>
                        <option value='키움'>키움</option>
                        <option value='한화'>한화</option>
                    </select>
                    <div>
                        <input type="checkbox"></input>전체동의
                        <p>전체동의를 선택하시면 아래의 모든 약관에 동의하게 됩니다.</p>
                    </div>
                    <div>
                        <input type="checkbox"></input>통합 서비스 이용약관
                        <a>약관 확인</a>
                    </div>
                    <div>
                        <input type="checkbox"></input>개인정보 처리방침
                        <a>약관 확인</a>
                    </div>
                    <input type="button">회원가입</input>
                </form>
            </div>
        </>
    )
}

export default Join;