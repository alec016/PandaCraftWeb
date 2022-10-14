import React from "react";
import './css/staffCard.scss'
import { useRef } from "react";

export default function StaffCard(props){
    const staff = props.staff
    const {name, rating, rank} = staff
    const {rates, total_rating} = rating
    const {total} = rates
    const user = props.user
    const setRate = props.rate
    const commentRef = useRef(null)
    let rate;

    // eslint-disable-next-line no-unused-vars
    const stars = (number) => {
        const texts = document.getElementsByTagName('textarea');
        [...texts].forEach(text => {
            text.disabled = true
        })
        const text = document.querySelector('#text_' + props.number)
        text.disabled = false
        rate = {
            staffRated: props.number,
            rate: number,
            user: user
        };
        const notStars = document.querySelectorAll('.stars');
        [...notStars].forEach(notStarCont => {
            const notStarChilds = notStarCont.children;
            [...notStarChilds].forEach(notStarChild => {
                notStarChild.classList.remove('selected')
            })
        })
        const stars = document.querySelectorAll('.stars._' + props.number + ' .star');
        [...stars].forEach((star, index) => {
            star.classList.remove('selected')
            if(index <= (number-1))
                star.classList.add('selected')
        });
        setRate(rate)
    }

    return(
        <div className="staffCard">
            <div className="staffName">"{rank}": {name}</div>
            <div className="staffRating">Rating: {total_rating}/5</div>
            <div className="numeroVotos">Número de votos: {total}</div>
            <div className={"stars _" + props.number}>
                <div className="star" star-value="1" onClick={() => {stars(1)}}>
                    <svg width="17" height="16" xmlns="http://www.w3.org/2000/svg">
                        <path d="m9.067.43 1.99 4.031c.112.228.33.386.58.422l4.45.647a.772.772 0 0 1 .427 1.316l-3.22 3.138a.773.773 0 0 0-.222.683l.76 4.431a.772.772 0 0 1-1.12.813l-3.98-2.092a.773.773 0 0 0-.718 0l-3.98 2.092a.772.772 0 0 1-1.119-.813l.76-4.431a.77.77 0 0 0-.222-.683L.233 6.846A.772.772 0 0 1 .661 5.53l4.449-.647a.772.772 0 0 0 .58-.422L7.68.43a.774.774 0 0 1 1.387 0Z"/>
                    </svg>
                </div>
                <div className="star" star-value="2" onClick={() => {stars(2)}}>
                    <svg width="17" height="16" xmlns="http://www.w3.org/2000/svg">
                        <path d="m9.067.43 1.99 4.031c.112.228.33.386.58.422l4.45.647a.772.772 0 0 1 .427 1.316l-3.22 3.138a.773.773 0 0 0-.222.683l.76 4.431a.772.772 0 0 1-1.12.813l-3.98-2.092a.773.773 0 0 0-.718 0l-3.98 2.092a.772.772 0 0 1-1.119-.813l.76-4.431a.77.77 0 0 0-.222-.683L.233 6.846A.772.772 0 0 1 .661 5.53l4.449-.647a.772.772 0 0 0 .58-.422L7.68.43a.774.774 0 0 1 1.387 0Z"/>
                    </svg>
                </div>
                <div className="star" star-value="3" onClick={() => {stars(3)}}>
                    <svg width="17" height="16" xmlns="http://www.w3.org/2000/svg">
                        <path d="m9.067.43 1.99 4.031c.112.228.33.386.58.422l4.45.647a.772.772 0 0 1 .427 1.316l-3.22 3.138a.773.773 0 0 0-.222.683l.76 4.431a.772.772 0 0 1-1.12.813l-3.98-2.092a.773.773 0 0 0-.718 0l-3.98 2.092a.772.772 0 0 1-1.119-.813l.76-4.431a.77.77 0 0 0-.222-.683L.233 6.846A.772.772 0 0 1 .661 5.53l4.449-.647a.772.772 0 0 0 .58-.422L7.68.43a.774.774 0 0 1 1.387 0Z"/>
                    </svg>
                </div>
                <div className="star" star-value="4" onClick={() => {stars(4)}}>
                    <svg width="17" height="16" xmlns="http://www.w3.org/2000/svg">
                        <path d="m9.067.43 1.99 4.031c.112.228.33.386.58.422l4.45.647a.772.772 0 0 1 .427 1.316l-3.22 3.138a.773.773 0 0 0-.222.683l.76 4.431a.772.772 0 0 1-1.12.813l-3.98-2.092a.773.773 0 0 0-.718 0l-3.98 2.092a.772.772 0 0 1-1.119-.813l.76-4.431a.77.77 0 0 0-.222-.683L.233 6.846A.772.772 0 0 1 .661 5.53l4.449-.647a.772.772 0 0 0 .58-.422L7.68.43a.774.774 0 0 1 1.387 0Z"/>
                    </svg>
                </div>
                <div className="star" star-value="5" onClick={() => {stars(5)}}>
                    <svg width="17" height="16" xmlns="http://www.w3.org/2000/svg">
                        <path d="m9.067.43 1.99 4.031c.112.228.33.386.58.422l4.45.647a.772.772 0 0 1 .427 1.316l-3.22 3.138a.773.773 0 0 0-.222.683l.76 4.431a.772.772 0 0 1-1.12.813l-3.98-2.092a.773.773 0 0 0-.718 0l-3.98 2.092a.772.772 0 0 1-1.119-.813l.76-4.431a.77.77 0 0 0-.222-.683L.233 6.846A.772.772 0 0 1 .661 5.53l4.449-.647a.772.772 0 0 0 .58-.422L7.68.43a.774.774 0 0 1 1.387 0Z"/>
                    </svg>
                </div>
            </div>
            <div className="Comentario">
                <textarea className="no-resize" id={"text_" + props.number} cols="40" rows="5" ref={commentRef} onChange={() => {
                    rate.comment = commentRef.current.value
                    setRate(rate)
                    }} disabled></textarea>
            </div>
        </div>
    )
}