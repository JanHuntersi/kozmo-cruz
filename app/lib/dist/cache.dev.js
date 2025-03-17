"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getCachedTourDates = getCachedTourDates;
var tourDatesCache = null;
var cacheTimestamp = null;
var CACHE_DURATION = 24 * 60 * 60 * 1000; // Cache duration in milliseconds (1 day)

function getCachedTourDates(fetchTourDates) {
  var now;
  return regeneratorRuntime.async(function getCachedTourDates$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          now = Date.now();

          if (!(tourDatesCache && now - cacheTimestamp < CACHE_DURATION)) {
            _context.next = 3;
            break;
          }

          return _context.abrupt("return", tourDatesCache);

        case 3:
          _context.next = 5;
          return regeneratorRuntime.awrap(fetchTourDates());

        case 5:
          tourDatesCache = _context.sent;
          cacheTimestamp = now;
          return _context.abrupt("return", tourDatesCache);

        case 8:
        case "end":
          return _context.stop();
      }
    }
  });
}