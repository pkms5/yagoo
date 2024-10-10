function LoginInput(){
    return (
        <>
            <div>
                <h2>로고</h2>
                <h3>로그인</h3>
                <form>
                    <p>아이디</p>
                    <input type="text" placeholder="4~15자 이내로 입력해주세요"></input>
                    <p>비밀번호</p>
                    <input type="passward" placeholder="최소 10자 이상 입력해주세요"></input>
                    <input type="button">로그인</input>
                    <input type="button">네이버 로그인</input>
                    <input type="button">카카오 로그인</input>
                    <input type="button">구글 로그인</input>
                    <a>회원가입</a>
                </form>
            </div>
        </>
    )
}

export default Login;