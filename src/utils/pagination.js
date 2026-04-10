/**
 * Standard pagination utility for the Music API
 * @param {Array} data - The full array of items
 * @param {Object} query - The request query (page, size)
 * @param {String} baseUrl - The base URL for next/prev links
 * @returns {Object} Paginated response object
 */
const paginate = (data, query, baseUrl) => {
  const page = parseInt(query.page) || 1;
  const size = parseInt(query.size) || 5;
  const startIndex = (page - 1) * size;
  const endIndex = page * size;

  const results = data.slice(startIndex, endIndex);
  const totalItems = data.length;
  const totalPages = Math.ceil(totalItems / size);

  return {
    info: {
      count: totalItems,
      pages: totalPages,
      next: endIndex < totalItems ? `${baseUrl}?page=${page + 1}&size=${size}` : null,
      prev: page > 1 ? `${baseUrl}?page=${page - 1}&size=${size}` : null
    },
    results
  };
};

module.exports = paginate;
