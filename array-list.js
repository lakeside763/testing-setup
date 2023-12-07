const reverseSegment = (arr, start, end) => {
  while(start < end) {
    [arr[start], arr[end]] = [arr[end], arr[start]]
    start++
    end--
  }
  return arr;
};

const getTopScoredDriverAmongExperienced = (drivers, X) => {
  // 1. Reverse the entire list of drivers;
  reverseSegment(drivers, 0, drivers.length -1);

  // 2 & 3. Reverse the last X drivers to order by score
  const K = drivers.length < X ? X : drivers.length - X;
  reverseSegment(drivers, K, drivers.length -1);

  // return drivers[drivers.length - 1];
  return drivers.slice(-2);
}

const drivers = [
  { id: 'D001', joined: '2015-01-01', score: 92 },
  { id: 'D002', joined: '2016-03-15', score: 85 },
  { id: 'D003', joined: '2017-06-21', score: 95 },
  { id: 'D004', joined: '2019-02-14', score: 90 },
  { id: 'D005', joined: '2020-11-05', score: 87 }
];

module.exports = {
  getTopScoredDriverAmongExperienced,
  drivers
}