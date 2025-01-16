import React, { useState } from "react";
import { useTheme } from "@mui/material";
import Box from "@/app/components/Box/Box";
import Button from "@/app/components/Button/Button";
import Typography from "@/app/components/Typography/Typography";
import { Modal as MUIModal } from "@mui/material";
import SeriesGrid from "@/app/components/SeriesGrid/SeriesGrid";
import BookGrid from "@/app/components/BookGrid/BookGrid";
import setLastSeries from "@/app/utils/setLastSeries";
import getConversationHistory from '@/app/utils/getConversationHistory';

const SelectorModal = ({ 
  open, 
  onClose, 
  seriesData,
  onSeriesSelect,
  onBookSelect,
  onChapterSelect,
  props 
}) => {
  const theme = useTheme();

  const [selectedSeries, setSelectedSeries] = useState(null);
  const [selectedBook, setSelectedBook] = useState(null);
  const [conversation, setConversation] = useState([]);
  const [selectedChapter, setSelectedChapter] = useState(null); // Currently selected chapter
  const [selectedSeriesBooks, setSelectedSeriesBooks] = useState(null);

  const getSelectedSeriesBooks = (seriesId) => {
    const series = seriesData.find((series) => series.seriesId === seriesId);
    var seriesBooks = series ? series.books : [];
    setSelectedSeriesBooks(seriesBooks);
  }

  const handleSeriesClick = (seriesId) => {
    const newSeries = seriesId;
    setSelectedSeries(newSeries);
    setLastSeries(newSeries);
    const history = getConversationHistory(newSeries);
    setConversation(history)

    if (history.length > 0) {
      const lastEntry = history[history.length - 1];
      setSelectedBook(lastEntry.book || null);
      setSelectedChapter(lastEntry.chapter || null);
      onSeriesSelect?.(newSeries);
      onBookSelect?.(lastEntry.book || null);
      onChapterSelect?.(lastEntry.chapter || null);
    } else {
      setSelectedBook(null);
      setSelectedChapter(null);

      onSeriesSelect?.(newSeries);
      onBookSelect?.(null);
      onChapterSelect?.(null);
    }

    getSelectedSeriesBooks(seriesId);
  }

  const handleBookClick = (bookNumber) => {
    onBookSelect?.(bookNumber);
    onChapterSelect?.(null);
    onClose();
  };

  const handleBack = () => {
    setSelectedSeriesBooks(null);
  }

  return (
    <MUIModal 
      open={open}
      onClose={onClose}
      {...props}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: '100%',
          height: '100%',
          backgroundColor: theme.palette.background.default,
          padding: 2,
          overflow: 'auto'
        }}
      >
        <Button
          variant="contained"
          color="primary"
          onClick={onClose}
          sx={{
            position: 'absolute',
            top: 8,
            right: 16,
          }}
        >
          Close
        </Button>
        {selectedSeriesBooks ? (
          <>
            <Button
              variant="contained"
              color="primary"
              onClick={handleBack}
              sx={{
                position: 'absolute',
                top: 8,
                left: 16,
              }}
            >
              Back
            </Button>
            <BookGrid
              books={selectedSeriesBooks}
              onSelect={handleBookClick}
            />
          </>
        ) : (
          <SeriesGrid
            seriesData={seriesData}
            onSelect={handleSeriesClick}
          />
        )}
      </Box>
    </MUIModal>
  );
};

export default SelectorModal;