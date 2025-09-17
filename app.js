// HSC Dashboard Data and Functionality
class HSCDashboard {
    constructor() {
        this.data = {
            "summary": [
                {"metric": "Active HSC", "july": 351, "august": 349, "change": -0.57},
                {"metric": "Patients Registered", "july": 19020, "august": 19090, "change": 0.37},
                {"metric": "Online Prescribed", "july": 9786, "august": 10927, "change": 11.66},
                {"metric": "Provisional Diagnosis", "july": 3949, "august": 4176, "change": 5.75},
                {"metric": "Vital Taken", "july": 8761, "august": 11178, "change": 27.59}
            ],
            "blocks": [
                {"block": "Nautan", "active_hsc_july": 7, "active_hsc_august": 10, "active_hsc_change": 42.86, "patients_july": 267, "patients_august": 369, "patients_change": 38.20, "online_july": 2, "online_august": 45, "online_change": 2150.00, "diagnosis_july": 1, "diagnosis_august": 11, "diagnosis_change": 1000.00, "vital_july": 3, "vital_august": 21, "vital_change": 600.00},
                {"block": "ZIRADEI", "active_hsc_july": 16, "active_hsc_august": 14, "active_hsc_change": -12.50, "patients_july": 270, "patients_august": 163, "patients_change": -39.63, "online_july": 33, "online_august": 38, "online_change": 15.15, "diagnosis_july": 2, "diagnosis_august": 3, "diagnosis_change": 50.00, "vital_july": 21, "vital_august": 30, "vital_change": 42.86},
                {"block": "Andar", "active_hsc_july": 11, "active_hsc_august": 11, "active_hsc_change": 0.00, "patients_july": 482, "patients_august": 875, "patients_change": 81.54, "online_july": 51, "online_august": 95, "online_change": 86.27, "diagnosis_july": 9, "diagnosis_august": 15, "diagnosis_change": 66.67, "vital_july": 54, "vital_august": 634, "vital_change": 1074.07},
                {"block": "Bhagwanpur hat", "active_hsc_july": 22, "active_hsc_august": 20, "active_hsc_change": -9.09, "patients_july": 361, "patients_august": 255, "patients_change": -29.36, "online_july": 52, "online_august": 29, "online_change": -44.23, "diagnosis_july": 7, "diagnosis_august": 0, "diagnosis_change": -100.00, "vital_july": 118, "vital_august": 102, "vital_change": -13.56},
                {"block": "Lakri nabiganj", "active_hsc_july": 14, "active_hsc_august": 11, "active_hsc_change": -21.43, "patients_july": 915, "patients_august": 309, "patients_change": -66.23, "online_july": 348, "online_august": 29, "online_change": -91.67, "diagnosis_july": 290, "diagnosis_august": 17, "diagnosis_change": -94.14, "vital_july": 221, "vital_august": 88, "vital_change": -60.18},
                {"block": "Goriakothi", "active_hsc_july": 29, "active_hsc_august": 30, "active_hsc_change": 3.45, "patients_july": 1374, "patients_august": 1947, "patients_change": 41.70, "online_july": 397, "online_august": 833, "online_change": 109.82, "diagnosis_july": 65, "diagnosis_august": 149, "diagnosis_change": 129.23, "vital_july": 488, "vital_august": 990, "vital_change": 102.87},
                {"block": "SISWAN", "active_hsc_july": 17, "active_hsc_august": 16, "active_hsc_change": -5.88, "patients_july": 627, "patients_august": 382, "patients_change": -39.07, "online_july": 399, "online_august": 199, "online_change": -50.13, "diagnosis_july": 15, "diagnosis_august": 14, "diagnosis_change": -6.67, "vital_july": 285, "vital_august": 151, "vital_change": -47.02},
                {"block": "BARHARIA", "active_hsc_july": 36, "active_hsc_august": 34, "active_hsc_change": -5.56, "patients_july": 940, "patients_august": 815, "patients_change": -13.30, "online_july": 408, "online_august": 610, "online_change": 49.51, "diagnosis_july": 194, "diagnosis_august": 315, "diagnosis_change": 62.37, "vital_july": 486, "vital_august": 476, "vital_change": -2.06},
                {"block": "Basantpur", "active_hsc_july": 11, "active_hsc_august": 11, "active_hsc_change": 0.00, "patients_july": 1497, "patients_august": 1293, "patients_change": -13.63, "online_july": 426, "online_august": 336, "online_change": -21.13, "diagnosis_july": 119, "diagnosis_august": 128, "diagnosis_change": 7.56, "vital_july": 474, "vital_august": 509, "vital_change": 7.38},
                {"block": "SIWAN", "active_hsc_july": 20, "active_hsc_august": 22, "active_hsc_change": 10.00, "patients_july": 794, "patients_august": 645, "patients_change": -18.77, "online_july": 460, "online_august": 363, "online_change": -21.09, "diagnosis_july": 47, "diagnosis_august": 39, "diagnosis_change": -17.02, "vital_july": 485, "vital_august": 416, "vital_change": -14.23},
                {"block": "Daraundha", "active_hsc_july": 16, "active_hsc_august": 17, "active_hsc_change": 6.25, "patients_july": 1119, "patients_august": 726, "patients_change": -35.12, "online_july": 489, "online_august": 356, "online_change": -27.20, "diagnosis_july": 379, "diagnosis_august": 262, "diagnosis_change": -30.87, "vital_july": 241, "vital_august": 279, "vital_change": 15.77},
                {"block": "Mairwa", "active_hsc_july": 11, "active_hsc_august": 11, "active_hsc_change": 0.00, "patients_july": 776, "patients_august": 716, "patients_change": -7.73, "online_july": 513, "online_august": 496, "online_change": -3.31, "diagnosis_july": 145, "diagnosis_august": 140, "diagnosis_change": -3.45, "vital_july": 395, "vital_august": 483, "vital_change": 22.28},
                {"block": "Pachrukhi", "active_hsc_july": 29, "active_hsc_august": 28, "active_hsc_change": -3.45, "patients_july": 1143, "patients_august": 1019, "patients_change": -10.85, "online_july": 533, "online_august": 537, "online_change": 0.75, "diagnosis_july": 165, "diagnosis_august": 99, "diagnosis_change": -40.00, "vital_july": 590, "vital_august": 527, "vital_change": -10.68},
                {"block": "Maharajganj", "active_hsc_july": 24, "active_hsc_august": 25, "active_hsc_change": 4.17, "patients_july": 1414, "patients_august": 1509, "patients_change": 6.72, "online_july": 660, "online_august": 854, "online_change": 29.39, "diagnosis_july": 238, "diagnosis_august": 304, "diagnosis_change": 27.73, "vital_july": 677, "vital_august": 1032, "vital_change": 52.44},
                {"block": "Hasanpura", "active_hsc_july": 15, "active_hsc_august": 15, "active_hsc_change": 0.00, "patients_july": 1210, "patients_august": 1131, "patients_change": -6.53, "online_july": 705, "online_august": 798, "online_change": 13.19, "diagnosis_july": 490, "diagnosis_august": 642, "diagnosis_change": 31.02, "vital_july": 602, "vital_august": 612, "vital_change": 1.66},
                {"block": "Guthani", "active_hsc_july": 18, "active_hsc_august": 18, "active_hsc_change": 0.00, "patients_july": 1372, "patients_august": 1488, "patients_change": 8.45, "online_july": 902, "online_august": 975, "online_change": 8.09, "diagnosis_july": 294, "diagnosis_august": 472, "diagnosis_change": 60.54, "vital_july": 754, "vital_august": 884, "vital_change": 17.24},
                {"block": "Raghunathpur", "active_hsc_july": 17, "active_hsc_august": 18, "active_hsc_change": 5.88, "patients_july": 1031, "patients_august": 683, "patients_change": -33.75, "online_july": 910, "online_august": 617, "online_change": -32.20, "diagnosis_july": 398, "diagnosis_august": 210, "diagnosis_change": -47.24, "vital_july": 875, "vital_august": 594, "vital_change": -32.11},
                {"block": "DARAULI", "active_hsc_july": 20, "active_hsc_august": 20, "active_hsc_change": 0.00, "patients_july": 1374, "patients_august": 1130, "patients_change": -17.76, "online_july": 964, "online_august": 685, "online_change": -28.94, "diagnosis_july": 318, "diagnosis_august": 228, "diagnosis_change": -28.30, "vital_july": 735, "vital_august": 512, "vital_change": -30.34},
                {"block": "Hussainganj", "active_hsc_july": 18, "active_hsc_august": 18, "active_hsc_change": 0.00, "patients_july": 2054, "patients_august": 3635, "patients_change": 76.97, "online_july": 1534, "online_august": 3032, "online_change": 97.72, "diagnosis_july": 773, "diagnosis_august": 1128, "diagnosis_change": 45.92, "vital_july": 1257, "vital_august": 2838, "vital_change": 125.78}
            ]
        };
        
        this.filteredData = [...this.data.blocks];
        this.currentSort = { field: null, ascending: true };
        
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.populateTable();
    }

    setupEventListeners() {
        // Search functionality
        document.getElementById('search').addEventListener('input', (e) => {
            this.filterData();
        });

        // Sort functionality
        document.getElementById('sort-metric').addEventListener('change', (e) => {
            this.sortData(e.target.value);
        });

        // Filter by change type
        document.getElementById('change-filter').addEventListener('change', (e) => {
            this.filterData();
        });

        // Reset filters
        document.getElementById('reset-filters').addEventListener('click', () => {
            this.resetFilters();
        });
    }

    formatNumber(num) {
        return num.toLocaleString();
    }

    formatPercentage(num) {
        if (num === 0) return '0.00%';
        const sign = num > 0 ? '+' : '';
        return `${sign}${num.toFixed(2)}%`;
    }

    getChangeClass(change) {
        if (change > 0) return 'positive';
        if (change < 0) return 'negative';
        return 'neutral';
    }

    populateTable() {
        const tbody = document.getElementById('table-body');
        tbody.innerHTML = '';

        if (this.filteredData.length === 0) {
            tbody.innerHTML = `
                <tr>
                    <td colspan="16" class="no-results">
                        No blocks found matching your criteria. Try adjusting the filters.
                    </td>
                </tr>
            `;
            return;
        }

        this.filteredData.forEach(block => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td class="block-name">${block.block}</td>
                <td>${this.formatNumber(block.active_hsc_july)}</td>
                <td>${this.formatNumber(block.active_hsc_august)}</td>
                <td class="change-cell ${this.getChangeClass(block.active_hsc_change)}">
                    ${this.formatPercentage(block.active_hsc_change)}
                </td>
                <td>${this.formatNumber(block.patients_july)}</td>
                <td>${this.formatNumber(block.patients_august)}</td>
                <td class="change-cell ${this.getChangeClass(block.patients_change)}">
                    ${this.formatPercentage(block.patients_change)}
                </td>
                <td>${this.formatNumber(block.online_july)}</td>
                <td>${this.formatNumber(block.online_august)}</td>
                <td class="change-cell ${this.getChangeClass(block.online_change)}">
                    ${this.formatPercentage(block.online_change)}
                </td>
                <td>${this.formatNumber(block.diagnosis_july)}</td>
                <td>${this.formatNumber(block.diagnosis_august)}</td>
                <td class="change-cell ${this.getChangeClass(block.diagnosis_change)}">
                    ${this.formatPercentage(block.diagnosis_change)}
                </td>
                <td>${this.formatNumber(block.vital_july)}</td>
                <td>${this.formatNumber(block.vital_august)}</td>
                <td class="change-cell ${this.getChangeClass(block.vital_change)}">
                    ${this.formatPercentage(block.vital_change)}
                </td>
            `;
            tbody.appendChild(row);
        });
    }

    filterData() {
        const searchTerm = document.getElementById('search').value.toLowerCase();
        const changeFilter = document.getElementById('change-filter').value;
        
        this.filteredData = this.data.blocks.filter(block => {
            // Search filter
            const matchesSearch = block.block.toLowerCase().includes(searchTerm);
            
            // Change type filter - Fixed logic
            let matchesChangeFilter = true;
            if (changeFilter === 'positive') {
                // Count positive vs negative changes
                const changes = [
                    block.active_hsc_change,
                    block.patients_change,
                    block.online_change,
                    block.diagnosis_change,
                    block.vital_change
                ];
                
                const positiveCount = changes.filter(change => change > 0).length;
                const negativeCount = changes.filter(change => change < 0).length;
                
                // Show blocks where positive changes outnumber negative changes
                matchesChangeFilter = positiveCount > negativeCount;
                
            } else if (changeFilter === 'negative') {
                // Count positive vs negative changes
                const changes = [
                    block.active_hsc_change,
                    block.patients_change,
                    block.online_change,
                    block.diagnosis_change,
                    block.vital_change
                ];
                
                const positiveCount = changes.filter(change => change > 0).length;
                const negativeCount = changes.filter(change => change < 0).length;
                
                // Show blocks where negative changes outnumber positive changes
                matchesChangeFilter = negativeCount > positiveCount;
            }
            
            return matchesSearch && matchesChangeFilter;
        });
        
        // Re-apply current sort if any
        if (this.currentSort.field) {
            this.applySorting(this.currentSort.field, this.currentSort.ascending);
        }
        
        this.populateTable();
    }

    sortData(field) {
        if (field === 'block') {
            this.applySorting('block', true);
        } else {
            // For change metrics, default to descending (highest first)
            this.applySorting(field, false);
        }
        this.populateTable();
    }

    applySorting(field, ascending = true) {
        this.currentSort = { field, ascending };
        
        this.filteredData.sort((a, b) => {
            let aValue, bValue;
            
            if (field === 'block') {
                aValue = a.block.toLowerCase();
                bValue = b.block.toLowerCase();
            } else {
                aValue = a[field];
                bValue = b[field];
            }
            
            let comparison = 0;
            if (aValue > bValue) {
                comparison = 1;
            } else if (aValue < bValue) {
                comparison = -1;
            }
            
            return ascending ? comparison : -comparison;
        });
    }

    resetFilters() {
        document.getElementById('search').value = '';
        document.getElementById('sort-metric').value = 'block';
        document.getElementById('change-filter').value = 'all';
        
        this.filteredData = [...this.data.blocks];
        this.currentSort = { field: null, ascending: true };
        
        this.populateTable();
    }
}

// Initialize the dashboard when the page loads
document.addEventListener('DOMContentLoaded', () => {
    new HSCDashboard();
    
    // Add some smooth scrolling behavior for better UX
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Add loading state management
    const table = document.getElementById('comparison-table');
    const filters = document.querySelectorAll('.form-control');
    
    filters.forEach(filter => {
        filter.addEventListener('input', () => {
            table.classList.add('table-updating');
            setTimeout(() => {
                table.classList.remove('table-updating');
            }, 300);
        });
    });
});