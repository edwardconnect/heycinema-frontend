import React, { useState } from 'react';
import Chip from '@material-ui/core/Chip';
import Dialog from '@material-ui/core/Dialog';
import Slide from '@material-ui/core/Slide';
import Button from '@material-ui/core/Button';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import CancelIcon from '@material-ui/icons/Cancel';

import { MovieReview } from '../../../models/move-review.model';
import Styles from './MovieCard.style';
import MovieDetail from '../MovieDetail/MovieDetail';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});


const MovieCard: React.FC<MovieReview> = (props) => {
    const [open, setOpen] = useState(false);
    const [details, setDetails] = useState<MovieReview>(null);
    const matches = useMediaQuery('(max-width:576px)');

    const handleClickOpen = async () => {
        try {
            const paramData = {
                apikey: '4eac7f9b',
                i: props.imdbID
            }
            const urlParams = new URLSearchParams(paramData)
            const res = await fetch(`http://www.omdbapi.com/?${urlParams.toString()}`);
            const data: MovieReview = await res.json();
            console.log(data);
            setDetails(data);
            setOpen(true);
        } catch (err) {
            console.error(err);
        }
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <Styles.StyledMovieCard>
                <Styles.MoviePosterWrapper>
                    <Styles.MoviePoster src={props.Poster} />
                </Styles.MoviePosterWrapper>
                <Styles.MovieContentWrapper>
                    <Styles.MovieHeader>
                        {props.Title}
                    </Styles.MovieHeader>
                    <Styles.MovieChipWrapper>
                        <Chip className="move__chip" label={props.Year} />
                        <Chip label={props.Type} />
                    </Styles.MovieChipWrapper>
                    <Button onClick={handleClickOpen} color="primary">
                        View More
                    </Button>
                </Styles.MovieContentWrapper>
            </Styles.StyledMovieCard>
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-labelledby="alert-dialog-slide-title"
                aria-describedby="alert-dialog-slide-description"
                fullScreen={matches}
            >
                {
                    matches &&
                    <Styles.CloseDetailButton onClick={handleClose}>
                        <CancelIcon />
                    </Styles.CloseDetailButton>
                }
                <MovieDetail {...details} />
            </Dialog>
        </>
    );
};

export default MovieCard