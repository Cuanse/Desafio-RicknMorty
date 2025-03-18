import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const renderPageNumbers = () => {
    const pageNumbers = [];
    
    pageNumbers.push(
      <TouchableOpacity 
        key={1}
        style={[styles.pageButton, currentPage === 1 && styles.activePage]}
        onPress={() => onPageChange(1)}
        disabled={currentPage === 1}
      >
        <Text style={[styles.pageText, currentPage === 1 && styles.activePageText]}>1</Text>
      </TouchableOpacity>
    );
    
    if (currentPage > 3) {
      pageNumbers.push(
        <Text key="leftEllipsis" style={styles.ellipsis}>...</Text>
      );
    }
    
    for (let i = Math.max(2, currentPage - 1); i <= Math.min(totalPages - 1, currentPage + 1); i++) {
      if (i !== 1 && i !== totalPages) {
        pageNumbers.push(
          <TouchableOpacity 
            key={i}
            style={[styles.pageButton, currentPage === i && styles.activePage]}
            onPress={() => onPageChange(i)}
          >
            <Text style={[styles.pageText, currentPage === i && styles.activePageText]}>{i}</Text>
          </TouchableOpacity>
        );
      }
    }
    
    if (currentPage < totalPages - 2) {
      pageNumbers.push(
        <Text key="rightEllipsis" style={styles.ellipsis}>...</Text>
      );
    }
    
    if (totalPages > 1) {
      pageNumbers.push(
        <TouchableOpacity 
          key={totalPages}
          style={[styles.pageButton, currentPage === totalPages && styles.activePage]}
          onPress={() => onPageChange(totalPages)}
          disabled={currentPage === totalPages}
        >
          <Text style={[styles.pageText, currentPage === totalPages && styles.activePageText]}>{totalPages}</Text>
        </TouchableOpacity>
      );
    }
    
    return pageNumbers;
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity 
        style={[styles.navButton, currentPage === 1 && styles.disabledButton]}
        onPress={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <Text style={styles.navButtonText}>Prev</Text>
      </TouchableOpacity>
      
      <View style={styles.pageNumbersContainer}>
        {renderPageNumbers()}
      </View>
      
      <TouchableOpacity 
        style={[styles.navButton, currentPage === totalPages && styles.disabledButton]}
        onPress={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        <Text style={styles.navButtonText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    marginVertical: 10,
  },
  pageNumbersContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  pageButton: {
    width: 35,
    height: 35,
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    marginHorizontal: 3,
  },
  activePage: {
    backgroundColor: '#2196F3',
  },
  pageText: {
    fontSize: 14,
  },
  activePageText: {
    color: 'white',
  },
  navButton: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    backgroundColor: '#e0e0e0',
    borderRadius: 5,
  },
  disabledButton: {
    backgroundColor: '#f0f0f0',
    opacity: 0.5,
  },
  navButtonText: {
    fontSize: 14,
    fontWeight: '500',
  },
  ellipsis: {
    marginHorizontal: 5,
  },
});

export default Pagination;