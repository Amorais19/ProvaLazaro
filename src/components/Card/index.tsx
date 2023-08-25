import * as S from "./styles"

export function Card() {
    return (
        <S.Aside>
            <div>
                <p>Culinária</p>
                <a id="co" href="/Home">
                    <p>Tópicos</p>
                </a>
                <a id="ca" href="/desc">
                    <p>Descrição</p>
                </a>
            </div>
        </S.Aside>
    )
}